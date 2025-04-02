"use client"

import { Button } from "@/components/ui/button"
import { APP_NAME } from "@/lib/constants"
import Image from "next/image"

function NotFound() {
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-4 shadow-lg rounded-lg p-6">
        <div>
          <Image height={48} width={48} src={'/images/logo.png'} alt={`${APP_NAME} logo`}/>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div>
            <h1 className="text-3xl">Page Not found</h1>
          </div>
          <div>
            <p className="text-red-600 ">
              Could not requested page
            </p>
          </div>
          <div>
            <Button onClick={()=>window.location.href="/"}>
              Back to Home Page
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
