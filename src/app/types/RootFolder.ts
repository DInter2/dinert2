import { FileDto } from "./File";
import { Folder } from "./Folder";

export interface RootFolderDto{
  folderName: string,
  folders: Folder[],
  files: FileDto[]
}
