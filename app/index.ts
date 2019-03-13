/* eslint-disable no-console */
import next from 'next';
import express from 'express';

import { createModels } from './models';

const port = process.env.APP_PORT;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  try {
    const server = express();
    const database = createModels();

    await database.sequelize.sync();

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (error: Error) => {
      if (error) {
        throw error;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit();
  }
});
