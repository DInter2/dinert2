import { BsFilePdfFill } from "react-icons/bs";
import { FcDocument } from "react-icons/fc";
import { AiFillFilePdf, AiFillFileExcel, AiFillFileWord } from "react-icons/ai";
import { SiGooglesheets } from "react-icons/si";
import { CgLoadbarDoc } from "react-icons/cg";

export const FileIcon = ({mimeType}: {mimeType: string}) => {
  switch (mimeType) {
    case "application/vnd.google-apps.document":
      return <div  className="h-16 w-16 rounded-sm bg-sky-500 flex justify-center items-center" >
                <CgLoadbarDoc color="white" className="h-16 w-16"/>
              </div>
    case "application/msword":
      return <AiFillFileWord color="blue" className="h-5 w-5"/>
    case "application/pdf":
      return <AiFillFilePdf color="red" className="h-5 w-5"/>
    case "application/vnd.google-apps.spreadsheet":
      return <SiGooglesheets color="green" className="h-5 w-5"/>
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return <AiFillFileExcel color="green" className="h-5 w-5"/>
    default:
      return <BsFilePdfFill color="red" className="h-5 w-5"/>
  }
}
