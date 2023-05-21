import { FolderDto } from "@/types/Folder";
import { FolderCard } from "../../components/folder_card";
import { FileCard } from "./files/filesCards";
import Thumbnail from "./files/ThumbnailsImage";

export function Folders({folderDto}: {folderDto: FolderDto}) {

  return (
    <>
      {folderDto.folders.sort(function(a,b): number{
        return a.name.localeCompare(b.name)
      }).map((folder)=>{
        return <FolderCard key={folder.id} folder={folder} />
      })}
      {folderDto.files.map((file) => <Thumbnail key={file.id} file={file}/>)}
    </>
  )
}
