import { FileDto } from "./File";
import { Folder } from "./Folder";

export interface RootFolderDto{
  description: string,
  folderName: string,
  folders: Folder[],
  files: FileDto[]
}
