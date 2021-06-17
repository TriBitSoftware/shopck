import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../middleware/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const { db } = await connectToDatabase();
  // db.collection("business-customer").insertOne({name:"Testing"}, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document inserted");
  // });
  // res.json("1 document inserted");
};