import { connect, connection } from 'mongoose';

const conn = {
  isConnected: false,
};

async function dbConnect() {
  const db = await connect(process.env.MONGODB_URI);
  conn.isConnected = db.connections[0].readyState;
}

connection.on('connected');

connection.on('error');

export { dbConnect, conn };
