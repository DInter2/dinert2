import { Folder } from "@/app/types/Folder";
import { FolderCard } from "../../components/folder_card";
import { FileCard } from "./files/filesCards";
import { FileDto } from "@/app/types/File";

export interface RootFolderDto{
  folderName: string,
  folders: Folder[],
  files: FileDto[]
}


export function Folders({rootFolderId}: {rootFolderId: RootFolderDto}) {

  return (
    <>
      {rootFolderId.folders.sort(function(a,b): number{
        return a.name.localeCompare(b.name)
      }).map((folder)=>{
        return (
          <div key={folder.id}>
            <FolderCard folder={folder} />
          </div>
        )
      })}
      {rootFolderId.files.map((file) => <FileCard key={file.id} file={file}/>)}
    </>
  )
}
