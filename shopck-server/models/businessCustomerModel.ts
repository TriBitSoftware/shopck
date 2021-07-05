import { IBusinessCustomer } from "../types/businessCustomerType"
import { model, Schema } from "mongoose"

const ImageSchema = new Schema({
  imageName: String,
  imageData: String,
  imageType: String,
});

const businessCustomerSchema:Schema =  new Schema (
    {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
        },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    businessName: {
      type: String,
      required: true,
    },
    businessEmail: {
      type: String,
    },
    businessPhoneNumber: {
      type: String,
    },
    businessAddress: {
      type: String,
      
    },
    facebook: {
      type: String,
      
    },
    twitter: {
      type: String,
      
    },
    instagram: {
      type: String,
    },
    websiteUrl: {
      type: String,
    },
    categories: {
      type: [String],
      required: true,
    },
    photos: {
      type: [ImageSchema],
    },
    description: {
      type: String,
      //required: true,
    },
    feedback: {
      type: String,
    },
  },
  { timestamps: true }
)

export default model<IBusinessCustomer>("business-customer", businessCustomerSchema)