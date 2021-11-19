const socketio = require('socket.io');

let io;
const allClients = [];

exports.setupWebsocket = (server) => {
  //
  io = socketio(server);

  io.on('connection', (socket) => {
    //
    const a = allClients.push(socket);

    console.log(`${new Date()} Usuário conectado: ${socket.id}`);

    console.log(`temos ${a} dispositivo conectado`);

    socket.emit('Connection Sucefull', 'Hi, you are connected with server!');

    socket.on('disconnect', () => {
      console.log(`${new Date()} Usuário desconectado: ${socket.id}`);
    });
  });
};

exports.sendSocketCommand = (data) => {
  io.emit(data);
};
