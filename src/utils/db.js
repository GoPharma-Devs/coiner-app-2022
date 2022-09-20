import { connect, connection } from 'mongoose';

const conn = {
  isConnected: false,
};

async function dbConnect() {
  const db = await connect(process.env.MONGODB_URI);
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
  console.log(conn.isConnected);
}

connection.on('connected', () => console.log('Mongodb connected to db'));

connection.on('error', (err) => console.error('Mongodb Errro:', err.message));

export { dbConnect, conn };
