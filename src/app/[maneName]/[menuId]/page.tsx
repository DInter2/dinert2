import { Folders, RootFolderDto } from "@/app/drive/[folderId]/components/folders";


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

async function getDataById(menuId: string): Promise<RootFolderDto> {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbxdwTbGYbK1Ku-KG0jgaByox6XfzOauc3dSJoGwVUO78HBHQ9FaQzDqTJsgwE4cdQES-w/exec?folderId=${menuId}`,
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async  function DriveFolder({ params: { menuId }}: {params: {menuId: string}}) {
  const data = await getDataById(menuId)
  return (
    <main className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-2">
        <Folders rootFolderId={data} />
    </main>
  )
}

