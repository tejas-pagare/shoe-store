import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z.string().refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))))
export const inserProductSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters"),
  slug: z.string().min(3, "Slug must be atleast 3 characters"),
  category: z.string().min(3, "Category  must be atleast 3 characters"),
  brand: z.string().min(3, "Brand must be atleast 3 characters"),
  description: z.string().min(3, "Description must be atleast 3 characters"),
  stock: z.coerce.number(),
  numReviews: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have atleast 1 image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  colors: z.array(z.string()).min(1, "Product must be at least 1 color"),
  sizes: z.array(z.string()).min(1, "Product must be at least 1 size"),
  price: currency,
});

const signFormSchema = z.object({
  email:z.string().email("Enter a valid email"),
  password:z.string().min(6,"Password must be atleast 6 character long")
})

export {signFormSchema}