import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { appConfig } from './configurations/app.config';
import { databaseConfig } from './configurations/database.config';

@Injectable()
export class AppConfigService {
  constructor(
    @Inject(appConfig.KEY)
    private readonly _app: ConfigType<typeof appConfig>,
    @Inject(databaseConfig.KEY)
    private readonly _database: ConfigType<typeof databaseConfig>,
  ) {}

  get database() {
    return this._database;
  }

  get port() {
    return this._app.port;
  }
}
