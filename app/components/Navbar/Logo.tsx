'use client'

import Image from "@/node_modules/next/image"
import { useRouter } from "@/node_modules/next/navigation"

const Logo = () => {

    const router = useRouter();

  return (
    <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height={160}
        width={160}
        src="/images/logo.png"
    />
  )
}

export default Logo