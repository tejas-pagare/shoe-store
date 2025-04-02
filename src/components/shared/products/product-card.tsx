import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import { Product } from "../../../../types";


function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <Card className="w-full max-w-sm ">
        <CardHeader className="p-0 items-center ">
          <Link  href={`product/${product.slug}`} >
          <Image src={product.images[0]} alt={product.name} width={300} height={300} priority={true} />
          </Link>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Badge>{product.brand}</Badge>
          <div className="font-bold">
            <Link href={`product/${product.slug}`}>
            {
              product.name
            }
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="font-medium">
              Color
            </h1>
            <div className="flex items-center gap-2">
              {
                product.colors.map((color:string)=>{
                  return <div key={color} className="h-5 w-5 rounded-full shadow-xl border border-gray-300 cursor-pointer" style={{backgroundColor:color}} title={color}></div>
                })
              }
            </div>

           
          </div>
          <div className="flex items-center gap-4">
          <h1 className="font-medium">
              Sizes
            </h1>
          <div className="flex items-center gap-2">
              {
                product.sizes.map((size:string)=>{
                  return <div key={size} className="px-2 py-1 text-center rounded-xl shadow-2xl border cursor-pointer"  title={size}>{size}</div>
                })
              }
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-between w-full items-center  gap-4">
            <div>
              {product.rating} Stars
            </div>
            <div>
          {
            product.stock>0 ? ( <ProductPrice price={Number(product.price)}/>):(
              <Badge variant={"destructive"}>Out of Stock</Badge>
            )
          }

            </div>

          </div>
        
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductCard;
