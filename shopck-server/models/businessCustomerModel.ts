import { IBusinessCustomer } from "../types/businessCustomerType"
import { model, Schema } from "mongoose"

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
      required: true,
    },
    businessName: {
      type: String,
      required: true,
    },
    businessEmail: {
      type: String,
      required: true,
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
      type: [String],
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