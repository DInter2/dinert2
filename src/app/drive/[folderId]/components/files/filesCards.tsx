import { DateBr } from "@/app/core/dateConvereter"
import { FileIcon } from "./fileIcon"
import { FileDto } from "@/app/types/File"

export function FileCard({file}:{file:FileDto}){
  return (
    <div className="group/File max-w-xs block  rounded-lg p-6 bg-slate-300 ring-1shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 space-x-4 duration-300 hover:-translate-y-1">
      <div className="shrink-0 flex justify-center items-center">
      <FileIcon mimeType={file.mimeType}/>
      </div>
      <div>
        <div className="text-slate-900 group-hover/File:text-white text-md font-semibold">{file.name.split("_").join(" ")}</div>
        <p className="group-hover/File:text-white text-slate-500"><DateBr date={file.updatedAt} /></p>
      </div>
    </div>
  )
}
