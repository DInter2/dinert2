import { Folders } from "./components/folders"
import Folder from "./components/Folder/Folder.Server";
import BreadcrumbsClient from "@/app/Components/layout/breadcrumbs/BreadcrumbsClient";
import { FolderDto } from "@/types/Folder";
import { FolderCard } from "../components/folder_card";
import Thumbnail from "./components/files/ThumbnailsImage";
import { ClientMarkdown } from "@/app/[maneName]/[menuId]/components/clientMarkdown";
import MarkdownView from "react-showdown";
import { IconForm, IconDoc, IconSheet, IconExcel, IconWord } from "@/app/Components/widgets/icons";



async function getDataById(folderId: string): Promise<FolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbwCQVRjf7NKFBcm7LmWiOP6Qu0RLJd6IL_49qEjDcUugMFjQ-_jrESFi_tnF7cN2s_Elw/exec?folderId=${folderId}`,
    { next: { revalidate: 6 } }
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { folderId }}: {params: {folderId: string}}) {
  const data = await getDataById(folderId);
  const Content = () => (
    <>
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
  return (
    <>
    <BreadcrumbsClient folderPath={data.path} />
      {<ClientMarkdown >
        <MarkdownView
          className="max-w-full overflow-x-auto scrollbar-thin markdown min-w-full"
          markdown={data.page}
          options={{ tables: true, emoji: true, }}
          components={{ IconForm, IconDoc, IconSheet, IconExcel, IconWord, Content }}
          />
      </ClientMarkdown>}
    </>
  )
}

