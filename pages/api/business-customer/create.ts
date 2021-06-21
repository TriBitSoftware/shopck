import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../middleware/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST") {
     res.status(405).end()
  }

  try {
    const { db } = await connectToDatabase();
    db.collection("business-customer").insertOne(req.body, function (err) {
      if (err) throw err;
       res.status(200).json("Document inserted successfully!")
    });
  } catch (err) {
    res.status(500).json(err)
  }
     

  
  
};