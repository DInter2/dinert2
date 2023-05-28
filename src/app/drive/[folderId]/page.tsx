import Folder from "./components/Folder/Folder.Server";
import BreadcrumbsClient from "@/app/Components/layout/breadcrumbs/BreadcrumbsClient";
import { FolderDto } from "@/types/Folder";
import { FolderCard } from "../components/folder_card";
import Thumbnail from "./components/files/ThumbnailsImage";
import { ClientMarkdown } from "@/app/[maneName]/[menuId]/components/clientMarkdown";
import MarkdownView from "react-showdown";
import { IconForm, IconDoc, IconSheet, IconExcel, IconWord } from "@/app/Components/widgets/icons";
import { Fragment } from "react";
import dynamic from 'next/dynamic';

const LaziContent = dynamic(
  () => import('./components/Content/Content'),
  {
    loading: () => <p className="text-gray-900">Loading...</p>,
  },
);

async function getDataById(folderId: string): Promise<FolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbyJLv9p6MaJ_gUbC5PuuGMG5bwjh0GpOItdTlSu2pDh_Hf2-p7VHorpDMKpyhlNv2lkJQ/exec?folderId=${folderId}`,
    // {next: {revalidate: 60}}
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { folderId }}: {params: {folderId: string}}) {
  const data = await getDataById(folderId);

  return (
    <Fragment>
    <BreadcrumbsClient folderPath={data.path} />
      {data.page!! && <Fragment> {data.page.sort((a, b) => {
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
      <LaziContent  data={data} />
    </Fragment>
  )
}


