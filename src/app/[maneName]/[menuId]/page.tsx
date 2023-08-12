import { ClientMarkdown } from "./components/clientMarkdown";
import MarkdownView from "react-showdown";
import { FolderDto } from "@/types/Folder";
import { IconForm,  IconDoc, IconSheet, IconExcel, IconWord } from "@/app/Components/widgets/icons";
import { Fragment } from "react";
import { appScriptUrl } from "@/lib/endpoint";
import BreadcrumbsClient from "@/app/Components/layout/breadcrumbs/BreadcrumbsClient";
import EmptyState from "@/app/Components/emptyState/EmptyState";
import Carousel from "./components/carossel";

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
    `${appScriptUrl}?folderId=${menuId}`,
    // {cache: "no-cache"}
    {next: {revalidate: 60}}
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { menuId }}: {params: {menuId: string}}) {
  const data = await getDataById(menuId)
  return (
    <div>
    {!data.files.length!! && !data.folders.length!! && !data.page.length!! && <EmptyState />}
      {data.page!! && <Fragment> {data.page.sort((a, b) => {
          return a.name.localeCompare(b.name);
        }).map((session, i)=>(
        <ClientMarkdown key={i}>
        <MarkdownView
          className="max-w-full overflow-x-auto scrollbar-thin markdown min-w-full md:px-16"
          markdown={session.content}
          options={{ tables: true, emoji: true, }}
          components={{ IconForm, IconDoc, IconSheet, IconExcel, IconWord, Carousel }}
          />
      </ClientMarkdown>))}</Fragment>}
    </div>
  )
}

