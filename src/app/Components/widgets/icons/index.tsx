import { FaListAlt } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { TbTableFilled } from "react-icons/tb";
import { BsFillFileExcelFill, BsFillFileWordFill } from "react-icons/bs";
import { ReactNode } from "react";

const IconForm = ({children}: {children: ReactNode})  => < FaListAlt color="purple"  className="mx-auto"  size={20}/>;
const IconDoc = () => <IoMdListBox color="#4387FF"  className="mx-auto " size={30}/>;
const IconSheet = () => <TbTableFilled color="green"  className="mx-auto" size={30}/>;
const IconExcel = () => <BsFillFileExcelFill color="green" className="mx-auto"  size={30}/>;
const IconWord = () => <BsFillFileWordFill color="#4387FF"  className="mx-auto" size={30}/> ;

export {
  IconForm,
  IconDoc,
  IconSheet,
  IconExcel,
  IconWord,
}
