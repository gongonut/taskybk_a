// import { Inject } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import {
  // OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AuthChatServices } from 'src/chat/jwt.authChatservices';
import { Payload } from 'src/datatypes';

export enum DbState {
  insert = 'insert',
  update = 'update',
  select = 'select',
  delete = 'delete',
  none = 'none'
}

export type NotifPayLoad = {
  staff__id?: string;
  rol?: string[]
  socket_id: string;
}

type CommandData = {
  cmd?: string; // nombre del comando
  user_id?: string;
  usert_id?: string;
  data?: any;
}

export interface CollectionNotification {
  dbState: DbState;
  collection?: string; // PollGroups, PollResult, ...
  field_id?: string; /// _id de el elemento en la colección
  // fieldId?: string; /// id de el elemento en la colección
  user_id?: string; // _id del origen del cambio
  usert_id?: string; // nombre del origen del cambio
  date?: number; // Fecha de la actualización
  data?: any;
  OriginalsocketId: string;
}

interface HandleNotifCMD {
  dbState: DbState,
  collection: string,
  field_id: string,
  userData: Payload,
  usert_id: string, // Staff o grupo de staff a quienes se dirige la accion
  data: any,
  date: number;
}

// @WebSocketGateway(Number(process.env.CHAT_PORT), { cors: { origin: '*' } })
@WebSocketGateway({ cors: { origin: '*', } })
export class ChatGateway {

  constructor(private readonly authChatServices: AuthChatServices) { }

  @WebSocketServer() server: Server;

  // ............................ MEMORY DATA BASE NOT SEND MESSAGE ...............................

  private handleNotifCMDList: Array<HandleNotifCMD> = [];

  private getAllUsertId(): Array<string> {
    const result: string[] = [];
    this.handleNotifCMDList.forEach((notif) => result.push(notif.usert_id));
    return result;
  }

  private getAllNotifList(): Array<HandleNotifCMD> { return this.handleNotifCMDList; }

  private getNotifListByUsertId(staff__id: string): Array<HandleNotifCMD> {
    const result: Array<HandleNotifCMD> = [];
    for (let i = 0; i < this.handleNotifCMDList.length; i++) {
      if (this.handleNotifCMDList[i].usert_id === staff__id) { result.push(this.handleNotifCMDList[i]) }
    }
    return result;
  }

  private insertNotifList(updateCard: any) { this.handleNotifCMDList.push(updateCard); }

  private deleteNotifListByIdt(staff__id: string) {
    while (true) {
      const cardIndex = this.handleNotifCMDList.findIndex((c) => c.usert_id === staff__id);
      if (cardIndex >= 0) {
        this.notification.splice(cardIndex, 1);
      } else { break; }
    }

  }

  private depureNotifByDataDtb() {
    const dt = new Date();
    const date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + - process.env.DAYS_TO_KEEP_MSGS).getTime();
    for (let i = 0; i < this.handleNotifCMDList.length; i++) {
      if (this.handleNotifCMDList[i].date > date) { this.handleNotifCMDList.splice(i, 1); i--; }
    }
  }

  // ................... MEMORY DATA BASE MEMORY DATA BASE MEMORY DATA BASE .....................

  private notification: Array<NotifPayLoad> = [];

  private getAllSocketId(): Array<string> {
    const result: string[] = [];
    this.notification.forEach((notif) => result.push(notif.socket_id));
    return result;
  }

  private getAll(): Array<NotifPayLoad> { return this.notification; }

  private getById(staff__id: string): NotifPayLoad {
    return this.notification.find((notif) => notif.staff__id === staff__id);
  }

  private upSert(idsocket_id: string, updateCard: any) {
    const indexToUpdate = this.notification.findIndex((notif) => notif.socket_id === idsocket_id);
    if (indexToUpdate >= 0) {
      this.notification[indexToUpdate] = {
        ...this.notification[indexToUpdate],
        ...updateCard,
      };
    } else {
      /// updateCard.id = Date.now();
      this.notification.push(updateCard);
    }
  }

  /*
  create(notif: any) {
    notif.id = Date.now();
    notif.validDate = new Date().toLocaleDateString('ES');
    this.notification = [...this.notification, notif];
  }

  update(staff__id: string, updateCard: any) {
    const indexToUpdate = this.notification.findIndex((notif) => notif.staff__id === staff__id);

    if (indexToUpdate >= 0) {
      this.notification[indexToUpdate] = {
        ...this.notification[indexToUpdate],
        ...updateCard,
      };
    }
  }
    */

  private delete(socket_id: string) {
    const cardIndex = this.notification.findIndex((c) => c.socket_id === socket_id);
    if (cardIndex >= 0) {
      this.notification.splice(cardIndex, 1);
    }
  }

  // ...........................................................................................

  // https://crontab.guru/
  @Cron('0 0 17 * * *') // At 17:00:00 every day
  async handleMessageCron() {
    console.log('Inicio depurar mensajes:', Date.now());
    await this.depureNotifByDataDtb();
    // console.log('actualizado...');
    console.log('Fin depurar mensajes:', Date.now())
  }

  private async resendData(staff__id: string) {
    const data2Send = this.getNotifListByUsertId(staff__id);
    if (data2Send.length > 0) {
      for (let i = 0; i < data2Send.length; i++) {
        await this.handleNotifCMD(data2Send[i].dbState, data2Send[i].collection, data2Send[i].field_id, data2Send[i].userData, data2Send[i].usert_id, data2Send[i].data);
      }
      this.deleteNotifListByIdt(staff__id);
    }
  }

  handleConnection(client: any) {
    this.authChatServices.getUserFromSocket(client).then(async userData => {
      const updateCard: NotifPayLoad = {
        socket_id: client.id,
        staff__id: userData?.id || '',
        rol: userData?.rol || [],
      }
      this.upSert(client.id, updateCard);
      // Resend data
      if (userData && userData.id) { this.resendData(userData.id); }

    });
  }

  @SubscribeMessage('credential')
  async handleCredential(client: Socket, data: any) {
    if (!data.staff__id) return;
    const updateCard: NotifPayLoad = {
      staff__id: data.staff__id,
      socket_id: client.id,
      rol: data.rol.split(',')
    }
    this.upSert(client.id, updateCard);
    // Resend data
    if (data && data.staff__id) { this.resendData(data.staff__id); }
  }

  @SubscribeMessage('command')
  async handleCommand(client: Socket, data: CommandData) {
    const pl: Payload = { id: data.user_id, name: '', rol: [] };
    await this.handleNotifCMD(DbState.none, data.cmd, '',
      pl,
      data.usert_id,
      data.data)
    /*
    switch (data.cmd) {
      case 'geoloc':
      case 'ansgeoloc':
        await this.handleNotifCMD(DbState.none, data.cmd, '',
          pl,
          data.usert_id,
          data.content)
        break;
    }
    */


    /*
    const sourceClient = await this.getById(data.user_id);
    if (!sourceClient) return;
    const targetClient = await this.getById(data.usert_id);
    if (!targetClient) return;
    this.server.to(targetClient.socket_id).emit('command2', data);
    */
  }

  handleDisconnect(client: any) {
    this.delete(client.id)
  }

  // ..............................................................................................

  async handleNotifCMD(
    dbState: DbState,
    collection: string,
    field_id: string,
    userData: Payload,
    usert_id: string, // Staff o grupo de staff a quienes se dirige la accion
    data: any
  ) {
    const actualClient = await this.getById(userData.id);
    if (!actualClient) return;
    const collectPayLoad: CollectionNotification = {
      dbState, collection, field_id, user_id: userData.id, usert_id,
      date: Date.now(),
      data,
      OriginalsocketId: actualClient.socket_id
    }
    this.server.to(actualClient.socket_id).emit('dtb-notification', collectPayLoad);
    // Target client
    if (!usert_id) return;
    const target = usert_id.split(';');
    target.forEach(async t => {
      const tgClient = await this.getById(t);
      if (tgClient) {
        this.server.to(tgClient.socket_id).emit('dtb-notification', collectPayLoad);
      } else {
        this.insertNotifList({ dbState, collection, field_id, userData, usert_id, data, date: Date.now() });
      }

    })

    /*
        if (usert_id.includes('_broadcast_')) {
          const soketList = await this.getAll();
          const collectPayLoad: CollectionNotification = {
            dbState, collection, field_id, user_id: userData.id, usert_id,
            date: Date.now(),
            data,
            OriginalsocketId: actualClient.socket_id
          }
          soketList.forEach(sklist => {
            if (
              sklist.rol.includes('P') ||
              usert_id === '_broadcast_' || usert_id === sklist.staff__id ||
              actualClient.staff__id === usert_id
            ) {
              this.server.to(sklist.socket_id).emit('dtb-notification', collectPayLoad);
            }
          });
        } else {
          const targetClient = await this.getById(usert_id);
          if (!targetClient) return;
        }
    */

    // Get list of subscriber clients


    // this.server.emit('dtb-notification', collectPayLoad);
    // client.broad
  }


  // ............................................................................................

  async handleChatBot(
    dbState: DbState,
    collection: string,
    field_id: string,
    userData: Payload,
    usert_id: string, // Staff a quien se dirige la accion, if _broadcast_ a todos
    data: any
  ) {
    const actualClient = await this.getById(userData.id);
    if (!actualClient) return;
    // Get list of subscriber clients

    const soketList = await this.getAll();
    const collectPayLoad: CollectionNotification = {
      dbState, collection, field_id, user_id: userData.id, usert_id,
      date: Date.now(),
      data,
      OriginalsocketId: actualClient.socket_id
    }
    soketList.forEach(sklist => {
      if (
        sklist.rol.includes('P') ||
        usert_id === '_broadcast_' || usert_id === sklist.staff__id ||
        actualClient.staff__id === usert_id
      ) { this.server.to(sklist.socket_id).emit('dtb-notification', collectPayLoad); }
    });
    // this.server.emit('dtb-notification', collectPayLoad);
    // client.broad
  }

}