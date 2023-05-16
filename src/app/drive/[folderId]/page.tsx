import { Folders } from "./components/folders"
import Folder from "./components/Folder/Folder.Server";
import BreadcrumbsClient from "@/app/Components/layout/breadcrumbs/BreadcrumbsClient";
import { FolderDto } from "@/app/types/Folder";



async function getDataById(folderId: string): Promise<FolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbwfSGhUjdck4TWFEMMMbwdG25oFPFVHXMIXnCxzpvOQl_XLHANwbShbwOJewjughXTSjQ/exec?folderId=${folderId}`,
      {next: { revalidate: 2000}}
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { folderId }}: {params: {folderId: string}}) {
  const data = await getDataById(folderId)
  return (
    <Folder title={data.name} breadDrumbs={<BreadcrumbsClient folderPath={data.path} />}>
      <Folders folderDto={data}/>
    </Folder>
  )
}

