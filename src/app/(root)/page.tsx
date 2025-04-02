
import ProductList from '@/components/shared/products/product-lists';
import { Metadata } from 'next'

import { getLatestArrivals } from '@/lib/actions/product.action';
import { LATEST_PRODUCT_LIMIT } from '@/lib/constants';
export const metadata:Metadata = {
  title:"Home"
}


const page = async() => {

const products = await getLatestArrivals();
  return (
    <div>
      <ProductList products={products} title='Latest Arrival' limit={LATEST_PRODUCT_LIMIT} />
    </div>
  )
}

export default page
