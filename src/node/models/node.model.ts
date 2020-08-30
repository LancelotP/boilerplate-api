import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, InterfaceType } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@InterfaceType()
export class Node {
  @FilterableField(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn()
  readonly createdAt: Date;

  @Field(() => GraphQLISODateTime)
  @UpdateDateColumn()
  readonly updatedAt: Date;

  @DeleteDateColumn()
  readonly deletedAt: Date;
}
