import { Db, MongoClient } from 'mongodb'

const MONGODB_URI: string = ""
const MONGODB_DB = "Shop_Ck"

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
  let conn :{client:MongoClient, db:Db} = await MongoClient.connect(MONGODB_URI, opts).then((client) => {
    return {
      client,
      db: client.db(MONGODB_DB),
     }
  })
  return conn
}