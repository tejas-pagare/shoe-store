export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME||"Shoes Store";
export const APP_DESCIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION||"Next Generation Shoes Store"
export const SERVER_URL=process.env.NEXT_PUBLIC_SERVER_URL||"http://localhost:3000/"
export const LATEST_PRODUCT_LIMIT = Number(process.env.NEXT_PUBLIC_LATEST_PRODUCT_LIMIT)||4
export const DefaultSignUpValue ={
  email:'',
  password:''
}