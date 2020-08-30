import * as Joi from '@hapi/joi';
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export const databaseConfig = registerAs<() => TypeOrmModuleOptions>(
  'database',
  () => ({
    type: 'postgres',
    // host: process.env.DATABASE_HOST,
    // port: parseInt(process.env.DATABASE_PORT),
    name: process.env.DATABASE_NAME,
    entities: [path.join(__dirname, '../../**/*.model{.ts,.js}')],
    migrations: [path.join(__dirname, '../../../migrations/**{.ts,.js}')],
    migrationsRun: true,
    synchronize: true,
    dropSchema: false,
  }),
);

export const databaseSchema = {
  DATABASE_HOST: Joi.string(),
  DATABASE_PORT: Joi.number(),
  DATABASE_NAME: Joi.string().required(),
};
