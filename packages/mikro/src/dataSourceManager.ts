import {
  Config,
  Init,
  Provide,
  Scope,
  Inject,
  ScopeEnum,
  DataSourceManager,
  MidwayLoggerService,
} from '@midwayjs/core';
import { MikroORM, IDatabaseDriver, Connection } from '@mikro-orm/core';

@Provide()
@Scope(ScopeEnum.Singleton)
export class MikroDataSourceManager extends DataSourceManager<
  MikroORM<IDatabaseDriver<Connection>>
> {
  @Config('mikro')
  mikroConfig;

  @Inject()
  baseDir: string;

  @Inject()
  loggerService: MidwayLoggerService;

  @Init()
  async init() {
    await this.initDataSource(this.mikroConfig, this.baseDir);
  }

  getName(): string {
    return 'mikro';
  }

  protected async createDataSource(
    config: any,
    dataSourceName: string
  ): Promise<MikroORM<IDatabaseDriver<Connection>>> {
    if (config.logger && typeof config.logger === 'string') {
      const logger = this.loggerService.getLogger(config.logger);
      config.logger = message => {
        logger.info(message);
      };
    }
    return MikroORM.init(config);
  }

  protected async checkConnected(
    dataSource: MikroORM<IDatabaseDriver<Connection>>
  ): Promise<boolean> {
    return dataSource.isConnected();
  }

  protected async destroyDataSource(
    dataSource: MikroORM<IDatabaseDriver<Connection>>
  ) {
    if (dataSource.isConnected()) {
      await dataSource.close();
    }
  }
}
