import { Injectable } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Payload } from 'src/datatypes';

@Injectable()
export class AuthChatServices {

    constructor(private jwtService: JwtService, private configService: ConfigService,) {}

    async getUserFromSocket(socket: Socket) {
        let auth_token = socket.handshake.headers.authorization;
        if (!auth_token) return;
        // get the token itself without "Bearer"
        auth_token = auth_token.split(' ')[1];

        const user = this.getUserFromAuthenticationToken(
            auth_token
        );

        if (!user) {
            throw new WsException('Invalid credentials.');
        }

        return user;
    }

    async getUserFromAuthenticationToken(token: string) {
        const payload: Payload = this.jwtService.verify(token, {
            secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
        });

        const userId = payload.id

        if (userId) {
            return payload;
        }
    }

}