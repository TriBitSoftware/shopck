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
    youtube: string
    linkedin: string
    websiteUrl: string
    categories: string[]
    photos:ImageUpload[],
    description: string
    feedback:string
}

export type ImageUpload = {
    imageName: string,
    imageData: string,
    imageType: string
}

export type FileAttachment = {
    filename: string,
    path: string,
    contentType: string
}  