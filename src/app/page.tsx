import { FolderDto } from "@/types/Folder";
import { IconForm, IconDoc, IconSheet, IconExcel, IconWord } from "./Components/widgets/icons";
import { ClientMarkdown } from "./[maneName]/[menuId]/components/clientMarkdown";
import MarkdownView from "react-showdown";
import { Fragment } from "react";

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
async function getDriveLinks() :Promise<FolderDto>{
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbyJLv9p6MaJ_gUbC5PuuGMG5bwjh0GpOItdTlSu2pDh_Hf2-p7VHorpDMKpyhlNv2lkJQ/exec?folderId=1S9rwKehcfMwdBkXKam4wtQI_c4BDsaRE`,
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export  default async function Home() {
  const folder = await getDriveLinks()
  return (
    <>
    {folder.page.length && <Fragment> {folder.page.sort((a, b) => {
    return a.name.localeCompare(b.name);
    }).map((session, i)=>(
          <ClientMarkdown key={i}>
          <MarkdownView
            className="max-w-full overflow-x-auto scrollbar-thin markdown min-w-full"
            markdown={session.content}
            options={{ tables: true, emoji: true, }}
            components={{ IconForm, IconDoc, IconSheet, IconExcel, IconWord }}
            />
        </ClientMarkdown>))}</Fragment>}
      </>
    )
}

