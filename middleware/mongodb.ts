import { Db, MongoClient } from 'mongodb'

const MONGODB_URI: string | undefined = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}


export async function connectToDatabase():Promise<{ client: MongoClient; db: Db }> {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  if (MONGODB_URI == undefined) {
    throw new Error(
      'Invalid MongoDB URI'
    )
  }
  let conn :{client:MongoClient, db:Db} = await MongoClient.connect(MONGODB_URI, opts).then((client) => {
    return {
      client,
      db: client.db(MONGODB_DB),
     }
  })
  return conn
}