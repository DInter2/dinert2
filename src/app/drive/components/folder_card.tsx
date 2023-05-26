import { FolderDto } from "@/types/Folder";
import Link from "next/link";
import { FcFolder } from "react-icons/fc"

export const FolderCard = ({folder}: {folder: FolderDto}) => (
  <Link href={`/drive/${folder.id}`} scroll={false} className="group/Card col-span-1 rounded-lg py-6 px-2 bg-slate-300 ring-slate-600 shadow-lg hover:bg-gray-700 hover:ring-gray-800 duration-300 hover:-translate-y-1">
    <div className="flex w-full items-center justify-center space-x-3">
      <FcFolder size={40}/>
      <h3 className="text-slate-900 group-hover/Card:text-white text-sm font-semibold">{ folder.name }</h3>
    </div>
    <p className="text-slate-500 group-hover/Card:text-white text-sm">{folder.description}</p>
  </Link>
)
