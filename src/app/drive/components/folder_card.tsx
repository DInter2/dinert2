import { Folder } from "@/app/types/Folder";
import Link from "next/link";
import { FcFolder } from "react-icons/fc"

export const FolderCard = ({folder}: {folder: Folder}) => (
  <Link href={`/drive/${folder.id}`} scroll={false} className="group/Card block min-w-lg rounded-lg p-6 bg-slate-300 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
    <FcFolder />
    <div className="flex items-center space-x-3">
      <h3 className="text-slate-900 group-hover/Card:text-white text-sm font-semibold">{ folder.name }</h3>
    </div>
    <p className="text-slate-500 group-hover/Card:text-white text-sm">{folder.description}</p>
  </Link>
)
