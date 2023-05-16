import { FileDto } from "./File";
import { FolderDto } from "./Folder";

export interface RootFolderDto{
  description: string,
  folderName: string,
  folders: FolderDto[],
  files: FileDto[]
}
