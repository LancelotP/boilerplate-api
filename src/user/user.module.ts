import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([User])],
      services: [UserService],
      resolvers: [
        {
          DTOClass: User,
          EntityClass: User,
          ServiceClass: UserService,
          enableTotalCount: true,
          create: { many: { disabled: true } },
          delete: { many: { disabled: true } },
          update: { many: { disabled: true } },
        },
      ],
    }),
  ],
})
export class UserModule {}

// @Module({
//   imports: [TypeOrmModule.forFeature([User])],
//   providers: [UserService, UserGuard],
//   exports: [UserService, UserGuard],
// })
// export class UserModule {}
