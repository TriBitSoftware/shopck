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
    categories: [string] | []
    photos:[File] | [],
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