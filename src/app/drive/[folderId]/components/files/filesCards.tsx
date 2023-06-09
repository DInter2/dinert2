'use client'

import { DateBr } from "@/app/core/dateConvereter"
import { FileDto } from "@/types/File"
import Image from "next/image"
import Link from "next/link"
import { FileImage } from "./fileImage"

export function FileCard({file}:{file:FileDto}){
    return(
      <Link href={file.url} target="_blank" rel="noopener noreferrer">
      <div className="group/File widget max-w-xs p-4 border rounded-md hover:bg-orange-500 hover:ring-red-600 duration-300 hover:-translate-y-1">
        <div className="w-full mx-auto mb-4">
          <FileImage alt={file.description} src={`https://lh3.google.com/u/0/d/${file.id}=s320-w320-h200-k-p`}/>
        </div>
        <h3 className="group-hover/File:text-white text-base font-bold text-gray-800 mb-2 break-words">{file.name}</h3>
        <p className="group-hover/File:text-white text-slate-500"><DateBr date={file.updatedAt} /></p>
      </div>
      </Link>
    )
    return (

        <div className="group/File max-w-xs block  rounded-lg p-6 bg-slate-300 ring-1shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 space-x-4 duration-300 hover:-translate-y-1">
          {/* <div className="shrink-0 flex justify-center items-center">
          <FileIcon mimeType={file.mimeType}/>
          </div> */}
          <div>
            <div className="text-slate-900 group-hover/File:text-white text-md font-semibold">{file.name.split("_").join(" ")}</div>
            <div className="text-slate-600 group-hover/File:text-white text-xs font-semibold">{file.description}</div>
            <p className="group-hover/File:text-white text-slate-500"><DateBr date={file.updatedAt} /></p>
          </div>
        </div>

    )
  }

