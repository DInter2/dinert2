'use client'

import Image from "next/image"

export function FileImage({alt, src}: {src: string, alt: string}){
  return <Image
  className="h-12 w-12 rounded-t object-cover"
  width={20}
  height={20}
  alt={src}
   src={"https://s3.amazonaws.com/my-bucket/profile.png"}
   data-iml="79895.90000000224"
   data-atf="false" />
}
