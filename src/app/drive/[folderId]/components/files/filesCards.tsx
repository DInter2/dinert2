'use client'
import { DateBr } from "@/app/core/dateConvereter"
import { FileDto } from "@/app/types/File"
import Link from "next/link"
import Image from "next/image"

export function FileCard({file}:{file:FileDto}){
  if(file.mimeType.includes("image")){
    return(
      <div className="widget max-w-xs p-4 border rounded-md">
        <div className="w-full max-w-md mx-auto mb-4">
          <Image
            src={`https://drive.google.com/uc?id=${file.id}`}
            alt={file.name}
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
        <h3 className="text-base font-bold text-gray-800 mb-2">{file.name}</h3>
      </div>
    )
  }
  return (
    <Link href={file.url} target="_blank" rel="noopener noreferrer">
      <div className="group/File max-w-xs block  rounded-lg p-6 bg-slate-300 ring-1shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 space-x-4 duration-300 hover:-translate-y-1">
        {/* <div className="shrink-0 flex justify-center items-center">
        <FileIcon mimeType={file.mimeType}/>
        </div> */}
        <div>
          <div className="text-slate-900 group-hover/File:text-white text-md font-semibold">{file.name.split("_").join(" ")}</div>
          <p className="group-hover/File:text-white text-slate-500"><DateBr date={file.updatedAt} /></p>
        </div>
      </div>
    </Link>
  )
}
