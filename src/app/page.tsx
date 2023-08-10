import { FolderDto } from "@/types/Folder";
import { IconForm, IconDoc, IconSheet, IconExcel, IconWord } from "./Components/widgets/icons";
import { ClientMarkdown } from "./[maneName]/[menuId]/components/clientMarkdown";
import MarkdownView from "react-showdown";
import { Fragment } from "react";
import { Logo } from "./Components/layout/logo/Logo";
import { appScriptUrl } from "@/lib/endpoint";
import Carousel from "./[maneName]/[menuId]/components/carossel";

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
async function getDriveLinks() :Promise<FolderDto>{
  const res = await fetch(
    `${appScriptUrl}?folderId=1S9rwKehcfMwdBkXKam4wtQI_c4BDsaRE`,
    {next: {
      revalidate: 60
    }}
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export  default async function Home() {
  const folder = await getDriveLinks()
  return (
    <div className="pt-20">
    {folder.page! && <Fragment> {folder.page.sort((a, b) => {
    return a.name.localeCompare(b.name);
    }).map((session, i)=>(
          <ClientMarkdown key={i}>
          <MarkdownView
            className="max-w-full overflow-x-auto scrollbar-thin markdown min-w-full md:px-16 pb-2"
            markdown={session.content}
            options={{ tables: true, emoji: true, }}
            components={{ IconForm, IconDoc, IconSheet, IconExcel, IconWord, Logo, Carousel }}
            />
        </ClientMarkdown>))}</Fragment>}
      </div>
    )
}

