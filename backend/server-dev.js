import dotenv from 'dotenv';
console.log(`DOTENV_CONFIG_PATH: ${process.env.DOTENV_CONFIG_PATH}`);
dotenv.config({ path: process.env.DOTENV_CONFIG_PATH || '.env.development' });


import path from 'path';
import express from 'express';
import cors from 'cors';

import db from './db/connection.js';
import router from './routers/index.js';
import { UserFacingError, DatabaseError } from './utils/baseErrors.js';

const BUILD_DIR = __dirname;
const HTML_FILE = path.resolve(BUILD_DIR, 'index.html');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

// support data from POST requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve static files
app.use(express.static(BUILD_DIR));

// Use API routes
app.use('/api/v1', router);

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});




app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

// Global error handler
app.use(function (err, req, res, next) {
  res.header('Content-Type', 'application/json');

  const status = err.status || 400;

  const response = {
    name: err.name,
    message: err.message ?? ''
  };

  if (err instanceof UserFacingError || err instanceof DatabaseError) {
    for (const [key, value] of Object.entries(err)) {
      response[key] = value;
    }
  }

  res.status(status).send(response);
});

console.log(`PORT: ${process.env.PORT}`);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
