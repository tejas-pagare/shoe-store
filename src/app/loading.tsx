import Image from 'next/image'
import React from 'react'
import loader from "@/assests/loader.gif"

const loading = () => {
  return (
    <div className='flex h-[100vh] w-[100vw] items-center justify-center'>
      <Image width={160} height={160} src={loader} alt='loading...'/>
    </div>
  )
}

export default loading
