import { Product } from "../../../../types";
import ProductCard from "./product-card";


const ProductList = ({products,title,limit}:{products:Product[],title?:string,limit?:number}) => {
  const limitedData:Product[] = limit ? products.slice(0,limit) : products ;
  return (
    <div  className="my-10">
      <h1 className="text-3xl font-bold mb-6 ">
        {title}
      </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        limitedData.map((product:Product)=><ProductCard key={product.slug} product={product}/>)
      }
    </div>

    </div>
  )
}

export default ProductList
