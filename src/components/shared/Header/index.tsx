
import { APP_NAME } from "@/lib/constants"

import Image from "next/image"
import Link from "next/link"

import Menu from "./Menu"

const Header = () => {
  return (
    <>
      <div className="w-full border-b p-2">
        <div className="wrapper flex-between">
          <div className="flex-start">
            <Link href={'/'}>
            <Image width={48} height={48} priority={true}  src={`/images/logo.png`} alt={`${APP_NAME} logo`}/>
            </Link>
            <span className="hidden lg:block ml-3  font-bold text-2xl">{APP_NAME}</span>
          </div>
         <Menu/>
        </div>
      </div>
    </>
  )
}

export default Header
