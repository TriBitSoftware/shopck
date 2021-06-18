import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../middleware/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST") {
     res.status(405).end()
  }
  const { db } = await connectToDatabase();
  db.collection("business-customer").insertOne(req.body, function(err) {
    if (err) throw err;
    console.log("1 document inserted");
  });
  
};