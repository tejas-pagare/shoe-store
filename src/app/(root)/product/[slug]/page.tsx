import { getProductBySlug } from "@/lib/actions/product.action";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/products/product-price";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductImage from "@/components/shared/products/product-image";

const page = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2">
          <ProductImage images={product.images } />
        </div>
        <div className="col-span-2 ">
          <div className="flex flex-col gap-6 ">
            <p>
              {product.brand} {product.category}
            </p>
            <h1 className="font-bold text-3xl">{product.name}</h1>
            <div className="flex">
              <span>⭐⭐⭐⭐</span>
              <div>{product.rating.toString()} Stars</div>
            </div>
            <div>{product.numReviews} Reviews</div>
            <div>
              <ProductPrice
                price={Number(product.price)}
                className="bg-green-100 text-green-700 rounded-lg p-2 w-16 h-12 cursor-pointer"
              />
            </div>
          </div>
          <div>
            <div className="mt-10">
              <div className="font-semibold">Description</div>
              <div>{product.description}</div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <Card className=" py-3">
            <CardHeader className="flex justify-between items-center">
              <div>Price</div>
              <div>
                <ProductPrice
                  price={Number(product.price)}
                  className="text-md"
                />
              </div>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p>Status</p>
              <div>
                {product.stock > 0 ? (
                  <Badge variant={"outline"}>In Stock</Badge>
                ) : (
                  <Badge variant={"destructive"}>Out of Stock</Badge>
                )}
              </div>
            </CardContent>
            <CardFooter>
              {product.stock > 0 && <Button className="w-full" size={"lg"}>Add to Cart</Button>}
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;
