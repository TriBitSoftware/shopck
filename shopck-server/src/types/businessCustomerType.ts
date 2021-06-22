import { Document } from "mongoose"

export interface IBusinessCustomer extends Document {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    businessName: string
    businessEmail: string
    businessPhoneNumber: string
    businessAddress: string
    facebook: string
    twitter: string
    instagram: string
    websiteUrl: string
    categories: string[]
    photos:File[],
    description: string
    feedback:string
}