import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    return await this.usersService.validateUser(email, password);
  }

  async login(user: any) {
    const payload = { login: user.login, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      login: user.login,
      name: user.name,
    };
  }
}
