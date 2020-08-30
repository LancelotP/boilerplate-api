import * as Joi from '@hapi/joi';
import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  isDev: process.env.NODE_ENV === 'development',
  isTest: process.env.NODE_ENV === 'test',
  isProd: process.env.NODE_ENV === 'production',
  environment: process.env.ENVIRONMENT as
    | 'development'
    | 'staging'
    | 'production',
  port: parseInt(process.env.PORT),
}));

export const appSchema = {
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  ENVIRONMENT: Joi.string()
    .valid('development', 'staging', 'production')
    .default('development'),
  PORT: Joi.number().default(3000),
};
