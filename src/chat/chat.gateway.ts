import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NotifPayLoad } from './entities/notification.entity';

export interface CollectionNotification {
  collection?: string; // PollGroup, PollResult, ...
  collect_id?: string; /// _id de el elemento en la colección
  grpName?: string; /// _id de el elemento en la colección
  staff__id?: string; // _id del origen del cambio
  staffname?: string; // _id del origen del cambio
  date?: number; // Fecha de la actualización
}

@WebSocketGateway(Number(process.env.CHAT_PORT), { cors: { origin: '*' } })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;
  private notification: Array<NotifPayLoad> = [];

  // ................... MEMORY DATA BASE MEMORY DATA BASE MEMORY DATA BASE .....................

  getAllSocketId(): Array<string> {
    const result: string[] = [];
    this.notification.forEach((notif) => result.push(notif.socket_id));
    return result;
  }

  getAll(): Array<NotifPayLoad> {
    return this.notification;
  }

  getById(staff__id: string): NotifPayLoad {
    return this.notification.find((notif) => notif.staff__id === staff__id);
  }

  upCreated(idsocket_id: string, updateCard: any) {
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

  getByPollResult(pollresult_id: string): string[] {
    const result = [];
    this.notification.forEach(ntf => {
      if (ntf.pollresult_ids.includes(pollresult_id)) { result.push(ntf.socket_id) }
    });
    return result;
  }

  getByPollsGroup(pollsgrp_id: string): string[] {
    const result = [];
    this.notification.forEach(ntf => {
      if (ntf.pollresult_ids.includes(pollsgrp_id)) { result.push(ntf.socket_id) }
    });
    return result;
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

  delete(staff__id: string) {
    const cardIndex = this.notification.findIndex((c) => c.staff__id === staff__id);
    if (cardIndex >= 0) {
      this.notification.splice(cardIndex, 1);
    }
  }

  // ..............................................



  afterInit(server: any) {
    console.log('Esto se ejecuta cuando inicia')
  }

  handleConnection(client: any, ...args: any[]) {
    const updateCard: NotifPayLoad = {
      staff__id: '',
      pollresult_ids: [],
      pollsgroup_ids: [],
      staff__ids: [],
      socket_id: client.id
    }
    this.upCreated(client.id, updateCard)
    // console.log('Hola alguien se conecto al socket 👌👌👌');
  }

  handleDisconnect(client: any) {
    console.log('ALguien se fue! chao chao')
  }


  @SubscribeMessage('event_join')
  handleJoinRoom(client: Socket, room: string) {
    client.join(`room_${room}`);
  }

  @SubscribeMessage('event_message') //TODO Backend
  handleIncommingMessage(
    client: Socket,
    payload: { room: string; message: string },
  ) {
    const { room, message } = payload;
    console.log(payload)
    this.server.to(`room_${room}`).emit('new_message', message);
  }

  @SubscribeMessage('event_leave')
  handleRoomLeave(client: Socket, room: string) {
    console.log(`chao room_${room}`)
    client.leave(`room_${room}`);
  }

  // ..............................................................................................

  handleNotifCMD(
    collection: string,
    collect_id: string,
    grpName: string,
    staff__id: string,
    staffname: string
  ) {
    // Get list of subscriber clients
    let soketList: string[] = [];
    // TODO: TEMPORAL
    soketList = this.getAllSocketId()
    /*
    soketList = this.getByPollResult(pollResult_id);
    soketList = [...soketList, ...this.getByPollsGroup(pollGrp_id)];
    */
    if (soketList.length > 0) {
      const payload: CollectionNotification = {
        collection, collect_id, grpName, staff__id, staffname,
        date: Date.now()
      }
      this.server.emit('dtb-notification', payload);
      /*
      soketList.forEach(sock_id => {
        this.server.to(sock_id).emit('collection-notificacion', payload);
      })
      */
    }
  }

}