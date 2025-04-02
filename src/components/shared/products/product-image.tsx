"use client"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react'

function ProductImage({images}:{images:string[]}) {
  const [current,setCurrent] = useState(0);
  return (
    <>
      <div>
        <Image src={images[current]} alt='image' height={500} width={500} className='min-h-[250px] object-center object-cover ' priority={true}/>
      </div>
      <div className='flex gap-3 items-center mt-6'>
        {
          images&&images.map((image,index)=>(
            <Image 
            key={image}
            className={cn('border rounded-md mr-2 cursor-pointer hover:border-red-600', current === index && 'border-red-500 rounded-md')}
            src={image} onClick={()=>setCurrent(index)} alt='image' width={100} height={100} priority={true} />
          ))
        }
      </div>
    </>
  )
}

export default ProductImage
