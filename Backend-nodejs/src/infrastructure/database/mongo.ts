import { MongoClient, Db } from 'mongodb';

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'EcoRota_db';

let db: Db;

export async function connectToMongo(): Promise<Db> {
  if (db) return db;

  const client = new MongoClient(MONGO_URL);
  await client.connect();

  console.log(' Conectado ao MongoDB com sucesso');

  db = client.db(DB_NAME);
  return db;
}
