// yarn dev

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

require('dotenv').config();

const app = express();
app.use(cors());

const server = http.createServer(app);

setupWebsocket(server);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (request, response) => {
  const sv = server;

  response.send(sv);
});

app.use(express.json());
app.use(routes);

server.listen(3333, () => {
  console.log('API online::rodando no 192.168.25.13:3333');
});
