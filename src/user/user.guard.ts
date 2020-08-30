import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Identifier } from '../utils/types';
import { User } from './models/user.model';

@Injectable()
export class UserGuard {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  private async getUser(identifier: Identifier<User>) {
    if (identifier instanceof User) {
      return identifier;
    } else {
      return this.userRepo.findOne(identifier);
    }
  }

  private getUserId(identifier: Identifier<User>) {
    if (identifier instanceof User) {
      return identifier.id;
    } else {
      return identifier;
    }
  }

  async canUpdateUser(viewer: User, identifier: Identifier<User>) {
    const userId = this.getUserId(identifier);

    return viewer.id === userId;
  }

  async canDeleteUser(viewer: User, identifier: Identifier<User>) {
    const userId = this.getUserId(identifier);

    return viewer.id === userId;
  }
}
