import { FolderCard } from "@/app/drive/components/folder_card"
import { FolderDto } from "@/types/Folder"
import Folder from "../Folder/Folder.Server"
import Thumbnail from "../files/ThumbnailsImage"

const Content = ({data}: {data: FolderDto}) => (
  <>
  {data.folders.length != 0 && <Folder title={data.name + " PASTAS"} >
    {data.folders.sort(function(a,b): number{
      return a.name.localeCompare(b.name)
    }).map((folder)=>{
      return <FolderCard key={folder.id} folder={folder} />
    })}
    </Folder>}
    {data.files.length != 0 && <Folder title={data.name + " ARQUIVOS"} >
      {data.files.map((file) => <Thumbnail key={file.id} file={file}/>)}
    </Folder>}
  </>
)

export default Content;
