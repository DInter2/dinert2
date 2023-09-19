import { appScriptUrl } from "@/lib/endpoint";
import { FolderDto } from "@/types/Folder";
import EmptyState from "../Components/emptyState/EmptyState";
import { ClientMarkdown } from "../[maneName]/[menuId]/components/clientMarkdown";
import MarkdownView from "react-showdown";
import { IconDoc, IconExcel, IconForm, IconSheet, IconWord } from "../Components/widgets/icons";
import Carousel from "../Components/widgets/carossel";
import { Fragment } from "react";

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}
export interface Folder {
  id: string,
  name: string,
  description: string,
  folders: Folder[]
}

async function getDataById(menuId: string): Promise<FolderDto> {
  const res = await fetch(
    `${appScriptUrl}?folderId=${menuId}`,
    // {cache: "no-cache"}
    { next: { revalidate: 60 } }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async function DriveFolder() {
  const data = await getDataById("1UlcCJyGzRkxa6ikMrItFO1BHmtynFOrI")
  const split = (term: string) => term.split('-')[0];
  return (
    <div>
      {!data.page.length!! && <EmptyState />}
      {data.page!! && <Fragment>
        {data.page.sort((a, b) => {
          return a.name.localeCompare(b.name);
        }).reverse().map((post, i) => (
          <ClientMarkdown key={split(post.name)}>
            <MarkdownView
              className="max-w-full overflow-x-auto scrollbar-thin markdown min-w-full md:px-16"
              markdown={post.content}
              options={{ tables: true, emoji: true, }}
              components={{ IconForm, IconDoc, IconSheet, IconExcel, IconWord, Carousel }}
            />
          </ClientMarkdown>
        ))}</Fragment>}
    </div>
  )
}