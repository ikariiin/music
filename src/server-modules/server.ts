import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import { router as configRouter } from './config';

const server = new Koa();
// We put any *special* routes in this router if we need to.
const baseRouter = new Router();
server.use((context: Koa.Context, next: Function) => {
  context.set('Access-Control-Allow-Origin', '*');
  next();
});

server.use(baseRouter.routes());
server.use(baseRouter.allowedMethods());

// Register all the other routers here
server.use(configRouter.routes());
server.use(configRouter.allowedMethods());

server.use(logger());
server.listen(80);
