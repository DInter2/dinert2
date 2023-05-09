import { Suspense } from "react"
import { Folders, RootFolderDto } from "./components/folders"

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

async function getDataById(folderId: string): Promise<RootFolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbxdwTbGYbK1Ku-KG0jgaByox6XfzOauc3dSJoGwVUO78HBHQ9FaQzDqTJsgwE4cdQES-w/exec?folderId=${folderId}`,
    { next: { revalidate: 1 } }
    );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { folderId }}: {params: {folderId: string}}) {
  const data = await getDataById(folderId)
  return (
    <main className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-2">
      <Suspense fallback={<div>Loading...</div>}>
        <Folders rootFolderId={data} />
      </Suspense>
    </main>
  )
}

