import { FolderCard } from "./components/folder_card";

export interface Folder{
  id: string,
  name: string,
  description: string,
  folders: Folder[]
}

async function getData(): Promise<Folder[]> {
  const res = await fetch('https://script.google.com/macros/s/AKfycbyAc3ZJt_iWvWneU720J8Lcj8XScR_-HBX6wdY9JuvJzpWO5V4PJbZw3d6WRf2Y5k25PA/exec',
    { cache: 'no-store' }
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

export default async  function Drive() {
  const data = await getData();
  const list = (folders: Folder[]) => (
    <ul className="space-y-3">
      {folders.sort(function(a,b): number{
        return a.name.localeCompare(b.name)
      }).map((folder)=>{
        return (
          <li key={folder.id}>
            <FolderCard folder={folder} />
          </li>
        )
      })}
     </ul>
  )

  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-24">
     {list(data)}
    </main>
  )
}

