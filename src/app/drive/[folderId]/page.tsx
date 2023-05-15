import { Folders } from "./components/folders"
import { RootFolderDto } from "@/app/types/RootFolder";
import Folder from "./components/Folder/Folder.Server";

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

async function getDataById(folderId: string): Promise<RootFolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbz00VKAR1si6n1ympOSHJugZPvBXOssUSNgX8uvRpWLOsWVMwXZGouPxzQhpv37ji6_Sw/exec?folderId=${folderId}`,
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { folderId }}: {params: {folderId: string}}) {
  const data = await getDataById(folderId)
  return (
    <Folder title={data.folderName} >
      <Folders rootFolderId={data}/>
    </Folder>
  )
}

