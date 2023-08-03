import { FolderDto } from "@/types/Folder";
import Link from "next/link";
import { FcFolder } from "react-icons/fc";
import { SiLooker } from "react-icons/si"

function PowerBiIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
    <linearGradient id="zlT103XX9RAwCGfF9JpW0a_3sGOUDo9nJ4k_gr1" x1="32" x2="32" y1="3.947" y2="44.751" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#ebb112"></stop><stop offset="1" stop-color="#bb5c17"></stop></linearGradient><path fill="url(#zlT103XX9RAwCGfF9JpW0a_3sGOUDo9nJ4k_gr1)" d="M27,44h10c1.105,0,2-0.895,2-2V6c0-1.105-0.895-2-2-2H27c-1.105,0-2,0.895-2,2v36	C25,43.105,25.895,44,27,44z"></path><linearGradient id="zlT103XX9RAwCGfF9JpW0b_3sGOUDo9nJ4k_gr2" x1="22.089" x2="26.009" y1="13.14" y2="45.672" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed35d"></stop><stop offset=".281" stop-color="#f6c648"></stop><stop offset=".857" stop-color="#e3a513"></stop><stop offset=".989" stop-color="#de9d06"></stop></linearGradient><path fill="url(#zlT103XX9RAwCGfF9JpW0b_3sGOUDo9nJ4k_gr2)" d="M19,44h10c1.105,0,2-0.895,2-2V16c0-1.105-0.895-2-2-2H19c-1.105,0-2,0.895-2,2v26	C17,43.105,17.895,44,19,44z"></path><linearGradient id="zlT103XX9RAwCGfF9JpW0c_3sGOUDo9nJ4k_gr3" x1="9.803" x2="21.335" y1="22.781" y2="43.658" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffd869"></stop><stop offset=".983" stop-color="#ffdf26"></stop></linearGradient><path fill="url(#zlT103XX9RAwCGfF9JpW0c_3sGOUDo9nJ4k_gr3)" d="M11,44h10c1.105,0,2-0.895,2-2V26c0-1.105-0.895-2-2-2H11c-1.105,0-2,0.895-2,2v16	C9,43.105,9.895,44,11,44z"></path>
</svg>
  )
}
export const FolderCard = ({folder}: {folder: FolderDto}) => (
  <Link href={`/drive/${folder.id}`} scroll={false} className="group/Card col-span-1 rounded-lg py-6 px-2 bg-slate-300 ring-slate-600 shadow-lg hover:bg-gray-700 hover:ring-gray-800 duration-300 hover:-translate-y-1">
    <div className="flex w-full items-center justify-start space-x-3">
      {folder.name.includes("(PowerBi)")? <PowerBiIcon/>: folder.name.includes("(LookerStudio)")? <SiLooker size={40} className="text-blue-600"/>: <FcFolder size={40}/>}
      <h3 className="text-slate-900 group-hover/Card:text-white text-sm font-semibold">{ folder.name}</h3>
    </div>
    <p className="text-slate-500 group-hover/Card:text-white text-sm">{folder.description.replace('(page)', '')}</p>
  </Link>
)
