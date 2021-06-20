import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../middleware/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != "POST") {
     res.status(405).end()
  }
  // const { db } = await connectToDatabase();
  // db.collection("business-customer").insertOne(req.body, function(err) {
  //   if (err) throw err;
  //   console.log("1 document inserted");
  // });

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'shopckregister@gmail.com',
      pass: '$'+process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: 'shopckregister@gmail.com',
    to: 'fareed878@hotmail.com',
    subject: `Business Registration From ${req.body.firstName +" "+ req.body.lastName}`,
    text: `${req.body.firstName +" "+ req.body.lastName}registered their business on ShopCK!\n
      Part 1 - Contact Info\n
      Name: ${req.body.firstName +" "+ req.body.lastName}\n
      Email: ${req.body.email} \n
      Phone: ${req.body.phoneNumber}\n
      Part 2 - Business Info\n
      Business Name: ${req.body.businessName}\n
      Phone: ${req.body.businessPhoneNumber}\n
      Address: ${req.body.businessAddress}\n
      Email: ${req.body.businessEmail}\n
      Website: ${req.body.websiteUrl}\n
      Facebook: ${req.body.facebook}\n
      Twitter: ${req.body.twitter}\n
      Instagram: ${req.body.instagram}\n
      Business Categories: ${req.body.categories}\n
      Business Description: ${req.body.desc}\n
      Photos: ${req.body.photos}\n
      Comments/Suggestion:`,
    html:
    `<div>
      <p><strong>${req.body.firstName +" "+ req.body.lastName}</strong> registered their business on ShopCK! </p>
      <p><strong>Part 1 - Contact Info</strong></p>
      <p>Name: ${req.body.firstName +" "+ req.body.lastName}</p>
      <p>Email: ${req.body.email}</p>   
      <p>Phone: ${req.body.phoneNumber}</p>
      <p><strong>Part 2 - Business Info</strong></p>
      <p>Business Name: ${req.body.businessName}</p>
      <p>Phone: ${req.body.businessPhoneNumber}</p>
      <p>Address: ${req.body.businessAddress}</p>
      <p>Email: ${req.body.businessEmail}</p>
      <p>Website: ${req.body.websiteUrl}</p>
      <p>Facebook: ${req.body.facebook}</p>
      <p>Twitter: ${req.body.twitter}</p>
      <p>Instagram: ${req.body.instagram}</p>
      <p>Business Categories: ${req.body.categories}</p>
      <p>Business Description: ${req.body.desc}</p>
      <p>Photos: ${req.body.photos}</p>
      <p>Comments/Suggestion:${req.body.feedback}</p>
    </div>`
  }

  transporter.sendMail(mailData, function (err: any, info: any) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

   res.status(200)
  
};