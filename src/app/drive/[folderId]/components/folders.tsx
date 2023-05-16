import { FolderDto } from "@/app/types/Folder";
import { FolderCard } from "../../components/folder_card";
import { FileCard } from "./files/filesCards";

export function Folders({folderDto}: {folderDto: FolderDto}) {

  return (
    <>
      {folderDto.folders.sort(function(a,b): number{
        return a.name.localeCompare(b.name)
      }).map((folder)=>{
        return <FolderCard key={folder.id} folder={folder} />
      })}
      {folderDto.files.map((file) => <FileCard key={file.id} file={file}/>)}
    </>
  )
}
