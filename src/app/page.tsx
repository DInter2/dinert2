import { RootFolderDto } from "../types/RootFolder";
import { ClientMarkdown } from "./[maneName]/[menuId]/components/clientMarkdown";

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
async function getDriveLinks() :Promise<RootFolderDto>{
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbyRJmaLH_1QMotqUeKmW7CrKyBoW9WZdWZn_ptojiK1Z6JS6ko4hVXwUaNA51oMdHyf4w/exec?folderId=1tCl6a-X1Uct25pxWZpBlnQo44Qpjis4N`,
    { next: { revalidate: 60 } }
    );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
export  default async function Home() {
  const folder = await getDriveLinks()

  return (
    <div className="flex flex-col items-center justify-center ">
       <div>
          {folder.files.map((file)=>{
              return <ClientMarkdown key={file.id} text={file.content}/>
            })}
        </div>
        <div className="h-10"/>
        {/* <LicksWrap>
          <div className="flex-col items-center justify-center bg-orange-400 p-8 rounded-md">
            <h1 className="text-4xl text-white font-bold  mb-3">Links rápidos</h1>
            <h1 className="text-2xl text-white mb-12">{folder.description}</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-ful">
              {folder.folders.map((card)=><CardWidget key={card.id} {...{description: card.description, title: card.name, id: card.id}} />)}
            </div>
          </div>
        </LicksWrap> */}
    </div>
  )
}

