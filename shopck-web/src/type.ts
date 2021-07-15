export type Image = {
    imageName: string,
    imageData: string,
    imageType: string
}

export type FormInfo = {
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
    photos:Image[],
    description: string
    feedback:string
}

export const initialFormInfo: FormInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    businessEmail: "",
    businessPhoneNumber: "",
    businessAddress: "",
    facebook: "",
    twitter: "",
    instagram: "",
     youtube: "",
    linkedin: "",
    websiteUrl: "",
    categories: [],
    photos:[],
    description: "",
    feedback:""
}

export type CustomTextInputField = {
    name: string
    label: string
    value: string
}

export const businessInfoInputFields: CustomTextInputField[] = [
    { label: "Business Name", name: "businessName" ,value:""},
    { label: "Business Phone", name: "businessPhoneNumber",value:"" },
    { label: "Business Address", name: "businessAddress",value:"" },
    { label: "Business Email", name: "businessEmail",value:"" },
    { label: "Business Website", name: "websiteUrl",value:"" },
    { label: "Facebook", name: "facebook",value:"" },
    { label: "Twitter", name: "twitter",value:"" },
    { label: "Instagram", name: "instagram",value:"" },
    { label: "Youtube", name: "youtube",value:"" },
    { label: "LinkedIn", name: "linkedin",value:"" },
        
]

export const businessCategories: string[] = [
    "Advertising & Media",
    "Agriculture, Fishing, & Forestry",
    "Arts, Culture & Entertainment",
    "Automotive",
    "Business & Professional Services",
    "Cleaning & Restoration",
    "Computers & Telecommunications",
    "Construction Equipment & Contractors",
    "Finance & Insurance",
    "Golf Course",
    "Government & Education",
    "Health Care",
    "Legal",
    "Lodging & Travel",
    "Manufacturing, Production & Wholesale",
    "Not-For-Profit Organizations",
    "Personal Services & Day Care",
    "Pets & Veterinary",
    "Public Utilities & Environment",
    "Real Estate, Moving & Storage",
    "Restaurants, Food Services & Catering",
    "Shopping & Specialty Retail",
    "Sports & Recreation",
    "Transportation",
                     
]