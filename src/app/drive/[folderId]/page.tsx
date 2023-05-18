import { Folders } from "./components/folders"
import Folder from "./components/Folder/Folder.Server";
import BreadcrumbsClient from "@/app/Components/layout/breadcrumbs/BreadcrumbsClient";
import { FolderDto } from "@/types/Folder";



async function getDataById(folderId: string): Promise<FolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbyV1wE00nb0nqvtD2A0Lp4Gaxm1JNCy5mEzKkJC6zxgPduOD5SdZr7ziVK8tnoarjnR4g/exec?folderId=${folderId}`,
      {cache: "no-cache"}
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

