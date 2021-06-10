export type PersonalInfo = {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
}

export type BusinessInfo = {
    name: string
    email: string
    phoneNumber: string
    address: string
    postalCode: string
    city: string
    facebook: string
    twitter: string
    instagram: string
    websiteUrl: string
    categories: string[]
    photos:File[],
    desc: string
}

export const initialPersonalInfo: PersonalInfo = {
    firstName: "",
    lastName:"",
    email: "",
    phoneNumber: "",
}

export const initialBusinessInfo: BusinessInfo = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    city: "",
    facebook: "",
    twitter: "",
    instagram: "",
    websiteUrl: "",
    categories: [],
    photos:[],
    desc: "",
}

export type CustomTextInputField = {
    name: string
    label: string
    value: string
}

export const businessInfoInputFields: CustomTextInputField[] = [
    { label: "Business Name", name: "name" ,value:""},
    { label: "Business Phone", name: "phoneNumber",value:"" },
    { label: "Business Address", name: "address",value:"" },
    { label: "Business Email", name: "email",value:"" },
    { label: "Business Website", name: "websiteUrl",value:"" },
    { label: "Facebook", name: "facebook",value:"" },
    { label: "Twitter", name: "twitter",value:"" },
    { label: "Instagram", name: "instagram",value:"" },
        
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