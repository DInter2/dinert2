import { ClientMarkdown } from "./components/clientMarkdown";
import MarkdownView from "react-showdown";
import { FolderDto } from "@/types/Folder";
import { IconForm,  IconDoc, IconSheet, IconExcel, IconWord } from "@/app/Components/widgets/icons";

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
    `https://script.google.com/macros/s/AKfycbyJLv9p6MaJ_gUbC5PuuGMG5bwjh0GpOItdTlSu2pDh_Hf2-p7VHorpDMKpyhlNv2lkJQ/exec?folderId=${menuId}`,
    { next: { revalidate: 60 } }
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
      {data.page.sort((a, b) => {
        return a.name.localeCompare(b.name);
      }).map((session, i)=>(
        <ClientMarkdown key={i}>
        <MarkdownView
          className="max-w-full overflow-x-auto scrollbar-thin"
          markdown={session.content}
          options={{ tables: true, emoji: true, }}
          components={{ IconForm, IconDoc, IconSheet, IconExcel, IconWord }}
          />
      </ClientMarkdown>
      ))}
        {/* <Folders rootFolderId={data} /> */}
    </div>
  )
}

