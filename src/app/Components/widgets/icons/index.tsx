import { FaListAlt } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { TbTableFilled } from "react-icons/tb";
import { BsFillFileExcelFill, BsFillFileWordFill } from "react-icons/bs";

const IconForm = ()  => <span className=" h-8 mr-1">< FaListAlt color="purple"    size={25}/></span> ;
const IconDoc = () => <span className=" h-8 mr-1"><IoMdListBox color="#4387FF"  size={30}/></span>;
const IconSheet = () => <span className=" h-8 mr-1"><TbTableFilled color="green"  size={30}/></span>;
const IconExcel = () => <span className=" h-8 mr-1"><BsFillFileExcelFill color="green"   size={30}/></span>;
const IconWord = () => <span className=" h-8 mr-1"><BsFillFileWordFill color="#4387FF" size={30}/></span> ;

export {
  IconForm,
  IconDoc,
  IconSheet,
  IconExcel,
  IconWord,
}
