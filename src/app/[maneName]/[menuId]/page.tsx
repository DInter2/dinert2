import { Folders,  } from "@/app/drive/[folderId]/components/folders";
import { RootFolderDto } from "@/types/RootFolder";
import Markdown from "./components/Markdown";
import { ClientMarkdown } from "./components/clientMarkdown";
import MarkdownView from "react-showdown";
import { FolderDto } from "@/types/Folder";


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

async function getDataById(menuId: string): Promise<FolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbzmbVNXKc5WcYOvW-buSMoq-o5On_5rZbMva9ZVrtPBkT7NaX-ZxLkIpH2QKkmsvs_MCw/exec?folderId=${menuId}`,
    { next: { revalidate: 10 } }
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { menuId }}: {params: {menuId: string}}) {
  const data = await getDataById(menuId)
  return (
    <div className="max-w-full">
      {data.files.map((file)=>{
        return (
          <ClientMarkdown key={file.id} >
            <MarkdownView
              className="xl:prose-2xl xs:prose-xl max-w-full overflow-x-auto scrollbar-thin"
              markdown={file.content}
              options={{ tables: true, emoji: true }}
              />
          </ClientMarkdown>)
        })}
        {/* <Folders rootFolderId={data} /> */}
    </div>
  )
}

