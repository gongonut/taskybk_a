import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Payload } from 'src/datatypes';
// import { UsersService } from './users.service';
// import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SEED
    });
  }

  async validate(payload: Payload): Promise<Payload> {
    return {id: payload.id, name: payload.name, rol: payload.rol}
  }
}