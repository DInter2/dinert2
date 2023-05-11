import { Folders,  } from "@/app/drive/[folderId]/components/folders";
import { RootFolderDto } from "@/app/types/RootFolder";
import Markdown from "./components/Markdown";


export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export interface Folder{
  id: string,
  name: string,
  description: string,
  folders: Folder[]
}

async function getDataById(menuId: string): Promise<RootFolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbz00VKAR1si6n1ympOSHJugZPvBXOssUSNgX8uvRpWLOsWVMwXZGouPxzQhpv37ji6_Sw/exec?folderId=${menuId}`,
    { next: { revalidate: 360 } }
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { menuId }}: {params: {menuId: string}}) {
  const data = await getDataById(menuId)
  return (
    <div >
      {data.files.map((file)=>{
        return <Markdown key={file.id} content={file.content}/>
      })}
        {/* <Folders rootFolderId={data} /> */}
    </div>
  )
}

