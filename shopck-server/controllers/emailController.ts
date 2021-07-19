import { Response, Request } from "express"
import { FileAttachment, IBusinessCustomer } from "../types/businessCustomerType"

const registrationEmail = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as IBusinessCustomer
        const attachments: FileAttachment[] = body.photos.map(photo => {
            return {
                filename: photo.imageName,
                path: photo.imageData,
                contentType: photo.imageType
            }
        })

        let nodemailer = require('nodemailer')

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: "shopckregister@gmail.com",
                pass: "$CK29648",
            },
            secure: true,
        })

        const mailData = {
            from: "shopckregister@gmail.com",
            to: "fareed878@hotmail.com",
            subject: `Business Registration From ${body.firstName + " " + body.lastName}`,
            attachments:attachments,
            text: `${body.firstName +" "+ body.lastName}registered their business on ShopCK!\n
            Part 1 - Contact Info\n
            Name: ${body.firstName +" "+ body.lastName}\n
            Email: ${body.email} \n
            Phone: ${body.phoneNumber}\n
            Part 2 - Business Info\n
            Business Name: ${body.businessName}\n
            Phone: ${body.businessPhoneNumber}\n
            Address: ${body.businessAddress}\n
            Email: ${body.businessEmail}\n
            Website: ${body.websiteUrl}\n
            Facebook: ${body.facebook}\n
            Twitter: ${body.twitter}\n
            Instagram: ${body.instagram}\n
            Business Categories: ${body.categories}\n
            Business Description: ${body.description}\n
            Comments/Suggestion: ${body.feedback}`,
            html:
            `<div>
            <p><strong>${body.firstName +" "+ body.lastName}</strong> registered their business on ShopCK! </p>
            <p><strong>Part 1 - Contact Info</strong></p>
            <p>Name: ${body.firstName +" "+ body.lastName}</p>
            <p>Email: ${body.email}</p>   
            <p>Phone: ${body.phoneNumber}</p>
            <p><strong>Part 2 - Business Info</strong></p>
            <p>Business Name: ${body.businessName}</p>
            <p>Phone: ${body.businessPhoneNumber}</p>
            <p>Address: ${body.businessAddress}</p>
            <p>Email: ${body.businessEmail}</p>
            <p>Website: ${body.websiteUrl}</p>
            <p>Facebook: ${body.facebook}</p>
            <p>Twitter: ${body.twitter}</p>
            <p>Instagram: ${body.instagram}</p>
            <p>Youtube: ${body.youtube}</p>
            <p>LinkedIn: ${body.linkedin}</p>
            <p>Instagram: ${body.instagram}</p>
            <p>Business Categories: ${body.categories}</p>
            <p>Business Description: ${body.description}</p>
            <p>Comments/Suggestion:${body.feedback}</p>
            </div>`
        }

        transporter.sendMail(mailData, function (err: any, info: any) {
            if (err) {
                  console.log(err)
                throw new Error(err)
            } else {
                res
                    .status(200)
                    .json("Email sent!").end()
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json("Email failed to send.").end()
    }
}

export {registrationEmail}