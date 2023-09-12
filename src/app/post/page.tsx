import { appScriptUrl } from "@/lib/endpoint";
import { FolderDto } from "@/types/Folder";
import { Fragment } from "react";
import EmptyState from "../Components/emptyState/EmptyState";
import { PostCard } from "./components/PostCard";
import { PostLink } from "./components/PostLink";

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


export default async  function DriveFolder() {
  const data = await getDataById("1UlcCJyGzRkxa6ikMrItFO1BHmtynFOrI")
  const split = (term: string) => term.split('-')[1];
  return (
    <div>
    {!data.page.length!! && <EmptyState />}
      {data.page!! && <div className="grid grid-cols-3 gap-4"> 
      {data.page.sort((a, b) => {
          return a.name.localeCompare(b.name);
        }).reverse().map((post, i)=>(
					<PostLink key={post.name} post={{content:post.content, title:split(post.name)}}>
						<PostCard  title={split(post.name)} />
					</PostLink>
      ))}</div>}
    </div>
  )
}