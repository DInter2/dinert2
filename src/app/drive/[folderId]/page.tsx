import { Folders } from "./components/folders"
import { childName } from "@/core/splitName";
import { RootFolderDto } from "@/app/types/RootFolder";

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
    `https://script.google.com/macros/s/AKfycbz00VKAR1si6n1ympOSHJugZPvBXOssUSNgX8uvRpWLOsWVMwXZGouPxzQhpv37ji6_Sw/exec?folderId=${folderId}`,
    // { next: { revalidate: 360 } }
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
    <section>
      <header className="bg-orange-200 shadow mb-2">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">{childName(data.folderName)}</h1>
				</div>
			</header>
      <main className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-2">
          <Folders rootFolderId={data} />
      </main>
    </section>
  )
}

