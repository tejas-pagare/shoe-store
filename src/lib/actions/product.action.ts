"use server"


import { convertToPalinText } from "../utils";
import { LATEST_PRODUCT_LIMIT } from "../constants";
import { prisma } from "../../../db/prisma";


export const getLatestArrivals = async()=>{
  
  const data = await prisma.product.findMany({
    take:LATEST_PRODUCT_LIMIT,
    orderBy:{createdAt:"desc"}
  });
  return convertToPalinText(data);
}


// get single product by it's slug 
export const getProductBySlug = async(slug:string)=>{
return await prisma.product.findFirst({where:{slug:slug}});
}