import { Injectable } from '@nestjs/common';
import { Md5 } from 'ts-md5';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../../database/models/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly repo: Repository<Users>,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.repo.findOne({
      where: {
        login: email,
        password: Md5.hashStr(password),
      },
    });
    if (user) {
      delete user.password;
      return user;
    }

    return undefined;
  }
}
