import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  PartialType
} from '@nestjs/graphql';
import { User } from '../models/user.model';
import { UserCreateInput } from './userCreate.dto';

@InputType()
export class UserUpdateInput extends PartialType(
  OmitType(UserCreateInput, ['email'] as const),
) {}

@ObjectType()
export class UserUpdateOutput {
  @Field(() => User)
  user: User;
}
