import { FileDto } from "./File";
import { FolderPath } from "./FolderPath";
export interface FolderDto{
  id: string,
  name: string,
  description: string,
  folders: FolderDto[],
  path: FolderPath,
  files: FileDto[]
  page: {content: string, name: string}[]
}
