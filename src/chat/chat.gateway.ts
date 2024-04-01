// import { Inject } from '@nestjs/common';
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
  content?: any;
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

// @WebSocketGateway(Number(process.env.CHAT_PORT), { cors: { origin: '*' } })
@WebSocketGateway({ cors: { origin: '*', } })
export class ChatGateway {

  constructor(private readonly authChatServices: AuthChatServices) { }

  @WebSocketServer() server: Server;

  // ................... MEMORY DATA BASE MEMORY DATA BASE MEMORY DATA BASE .....................

  private notification: Array<NotifPayLoad> = [];

  getAllSocketId(): Array<string> {
    const result: string[] = [];
    this.notification.forEach((notif) => result.push(notif.socket_id));
    return result;
  }

  getAll(): Array<NotifPayLoad> { return this.notification; }

  getById(staff__id: string): NotifPayLoad {
    return this.notification.find((notif) => notif.staff__id === staff__id);
  }

  upSert(idsocket_id: string, updateCard: any) {
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

  delete(socket_id: string) {
    const cardIndex = this.notification.findIndex((c) => c.socket_id === socket_id);
    if (cardIndex >= 0) {
      this.notification.splice(cardIndex, 1);
    }
  }

  // ...........................................................................................

  handleConnection(client: any) {
    this.authChatServices.getUserFromSocket(client).then(userData => {
      const updateCard: NotifPayLoad = {
        socket_id: client.id,
        staff__id: userData?.id || '',
        rol: userData?.rol || [],
      }
      this.upSert(client.id, updateCard);
    });
  }

  @SubscribeMessage('credential')
  handleCredential(client: Socket, data: any) {
    if (!data.staff__id) return;
    const updateCard: NotifPayLoad = {
      staff__id: data.staff__id,
      socket_id: client.id,
      rol: data.rol.split(',')
    }
    this.upSert(client.id, updateCard);
  }

  @SubscribeMessage('command')
  async handleCommand(client: Socket, data: CommandData) {
    const pl: Payload = { id: data.user_id, name: '', rol: [] };
    switch (data.cmd) {
      case 'geoloc':
      case 'ansgeoloc':
        await this.handleNotifCMD(DbState.none, data.cmd, '',
          pl,
          data.usert_id,
          data.content)
        break;
    }


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
    // Target client
    if (!usert_id) return;
    const target = usert_id.split(';');
    const collectPayLoad: CollectionNotification = {
      dbState, collection, field_id, user_id: userData.id, usert_id,
      date: Date.now(),
      data,
      OriginalsocketId: actualClient.socket_id
    }
    target.forEach(async t => {
      const tgClient = await this.getById(t);
      if (tgClient) {
        this.server.to(tgClient.socket_id).emit('dtb-notification', collectPayLoad);
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