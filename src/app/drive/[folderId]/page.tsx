import { Folders } from "./components/folders"
import Folder from "./components/Folder/Folder.Server";
import BreadcrumbsClient from "@/app/Components/layout/breadcrumbs/BreadcrumbsClient";
import { FolderDto } from "@/types/Folder";
import { FolderCard } from "../components/folder_card";
import Thumbnail from "./components/files/ThumbnailsImage";



async function getDataById(folderId: string): Promise<FolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbyV1wE00nb0nqvtD2A0Lp4Gaxm1JNCy5mEzKkJC6zxgPduOD5SdZr7ziVK8tnoarjnR4g/exec?folderId=${folderId}`,
    { next: { revalidate: 60 } }
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { folderId }}: {params: {folderId: string}}) {
  const data = await getDataById(folderId)
  return (
    <>
    <BreadcrumbsClient folderPath={data.path} />
      {data.folders.length != 0 && <Folder title={data.name + " PASTAS"} >
      {data.folders.sort(function(a,b): number{
        return a.name.localeCompare(b.name)
      }).map((folder)=>{
        return <FolderCard key={folder.id} folder={folder} />
      })}
      </Folder>}
      {data.files.length != 0 && <Folder title={data.name + " ARQUIVOS"} >
        {data.files.map((file) => <Thumbnail key={file.id} file={file}/>)}
      </Folder>}
    </>
  )
}

