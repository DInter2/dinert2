import { childName } from "@/core/splitName";
import { Folder } from "../types/Folder";
import { FolderCard } from "./components/folder_card";
import { RootFolderDto } from "../types/RootFolder";

async function getData(): Promise<RootFolderDto> {
  const res = await fetch('https://script.google.com/macros/s/AKfycbz00VKAR1si6n1ympOSHJugZPvBXOssUSNgX8uvRpWLOsWVMwXZGouPxzQhpv37ji6_Sw/exec',
    { cache: 'no-store' }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async  function Drive() {
  // const data = await getData();
  // const list = (folders: Folder[]) => (
  //   <main className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-2">
  //     {folders.sort(function(a,b): number{
  //       return a.name.localeCompare(b.name)
  //     }).map((folder)=>{
  //       return (
  //           <FolderCard key={folder.id} folder={folder} />
  //       )
  //     })}
  //    </main>
  // )

  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24">
     Início
    </main>
  )
}

