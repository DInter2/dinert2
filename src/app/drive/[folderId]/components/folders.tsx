import { FolderCard } from "../../components/folder_card";
import { Folder } from "../page";
import { FileCard, FileDto } from "./files/filesCards";

export interface RootFolderDto{
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
