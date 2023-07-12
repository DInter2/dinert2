'use client'

import Image from "next/image"

export function FileImage({alt, src}: {src: string, alt: string}){
  return <Image
  className="max-w-full
  rounded-md
  group-hover/File:text-white
  text-gray-800
  object-none
  object-top
  pt-4
  min-w-full"
  src={src}
  width={200}
  height={200}
  alt={alt}
  onError={({ currentTarget,  }) => {
    currentTarget.onerror = null;
    currentTarget.src = '/images/google-drive.png';
    currentTarget.classList.add("p-auto")
  }}
/>
}

