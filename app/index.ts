/* eslint-disable no-console */
import next from 'next';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import authRoutes from './routes/auth';

const port = process.env.APP_PORT;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  try {
    await mongoose.connect('mongodb://mongo:27017/app', { useNewUrlParser: true });

    const server = express();

    server.use(bodyParser.json());

    server.use('/auth', authRoutes);

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
