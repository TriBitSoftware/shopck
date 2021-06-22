import { Response, Request } from "express"
import { IBusinessCustomer } from "../types/businessCustomerType"
import BusinessCustomer from "../models/businessCustomerModel"

const submitForm = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as IBusinessCustomer
       console.log(req.body)
        const businessCustomer: IBusinessCustomer = new BusinessCustomer({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            phoneNumber: body.phoneNumber,
            businessName: body.businessName,
            businessEmail: body.businessEmail,
            businessPhoneNumber: body.businessPhoneNumber,
            businessAddress: body.businessAddress,
            facebook: body.facebook,
            twitter: body.twitter,
            instagram: body.instagram,
            websiteUrl: body.websiteUrl,
            categories: body.categories,
            photos:body.photos,
            description: body.description,
            feedback:body.feedback,
        })

        const submittedBusinessCustomer: IBusinessCustomer = await businessCustomer.save()
        const registeredBusinesses: IBusinessCustomer[] = await BusinessCustomer.find()

        res
            .status(201)
            .json({ message: "Form submited", businessCustomer: submittedBusinessCustomer, business: registeredBusinesses })
    } catch (error) {
        console.log(error)
         res
            .status(500)
            .json({errorMessage: error})
   
    }
}
export {submitForm}