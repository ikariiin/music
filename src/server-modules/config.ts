import { Context } from 'koa';
import * as Router from 'koa-router';
import { readFile, writeFile } from 'jsonfile';
import * as config from "./storage/config.json";
import { ConfigItems } from '../types';

const router = new Router({
  prefix: '/config'
});

router.get('config-get-all', '/', (context: Context) => {
  context.body = {
    peepee: "poopoo"
  };
});

router.get('config-get-item', '/:item', (context: Context) => {
  const param: ConfigItems = context.params.item;

  context.body = {
    [param]: config[param]
  }
});

router.post('config-set-item', '/:item', async (context: Context) => {
  const param = context.params.item;
  const file = await readFile(`${__dirname}/storage/config.json`);
});

export { router };