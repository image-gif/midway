import { createApp, close } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa'
import { join } from 'path';
import { closeMongoServer, createMongoServer } from './util';

describe('/test/index.test.ts', () => {

  beforeAll(async () => {
    await createMongoServer();
  })

  afterAll(async () => {
    await closeMongoServer();
  })

  it('should connect mongodb', async () => {
    let app = await createApp(join(__dirname, 'fixtures', 'base-app'), {}, Framework);
    await close(app);
  });
});
