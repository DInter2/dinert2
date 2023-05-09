import Image from "next/image"
import Link from "next/link"
import { FileImage } from "./fileImage"
import { DateBr } from "@/core/dateConvereter"
import { ImageResponse } from "next/server"
import { FileIcon } from "./fileIcon"

export interface FileDto{
  id: string,
  name: string,
  mimeType: string,
  url: string,
  thumbnail: string,
  content: string,
  updatedAt: string
}

export function FileCard({file}:{file:FileDto}){
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 duration-300 hover:-translate-y-1">
  <div className="shrink-0">
  <FileIcon mimeType={file.mimeType}/>
  </div>
  <div>
    <div className="text-xl font-sans text-black">{file.name.split("_").join(" ").substring(0, 30) + "..."}</div>
    <p className="text-slate-500"><DateBr date={file.updatedAt} /></p>
  </div>
</div>
  )
}
