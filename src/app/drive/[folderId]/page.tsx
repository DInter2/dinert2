import BreadcrumbsClient from "@/app/Components/layout/breadcrumbs/BreadcrumbsClient";
import { FolderDto } from "@/types/Folder";
import { ClientMarkdown } from "@/app/[maneName]/[menuId]/components/clientMarkdown";
import MarkdownView from "react-showdown";
import { IconForm, IconDoc, IconSheet, IconExcel, IconWord } from "@/app/Components/widgets/icons";
import { Fragment } from "react";
import Content from "./components/Content/Content";
import { appScriptUrl } from "@/lib/endpoint";
import EmptyState from "@/app/Components/emptyState/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import NotAutarized from "@/app/Components/NotAutarized";

async function getDataById(folderId: string): Promise<FolderDto> {
  const res = await fetch(
    `${appScriptUrl}?folderId=${folderId}`,
    // {cache: "no-cache"}
    {next: {revalidate: 60}}
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { folderId }}: {params: {folderId: string}}) {
  const currentUser = await getCurrentUser();
  if (!currentUser!) {

    return (
      <NotAutarized />
    )
  }

  const data = await getDataById(folderId);
  return (
    <div>
    <BreadcrumbsClient folderPath={data.path} />
    {!data.files.length!! && !data.folders.length!! && !data.page.length!! && <EmptyState />}
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
      <Content  data={data} />
    </div>
  )
}


