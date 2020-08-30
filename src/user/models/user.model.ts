import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { Node } from '../../node/models/node.model';

@Entity()
@ObjectType({ implements: [Node] })
export class User extends Node {
  @Column({ unique: true })
  sub: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  lastName?: string;
}
