import { FaListAlt } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { TbTableFilled } from "react-icons/tb";
import { BsFillFileExcelFill, BsFillFileWordFill } from "react-icons/bs";

const IconForm = ()  => <div className=" h-8 mr-1">< FaListAlt color="purple"    size={25}/></div> ;
const IconDoc = () => <div className=" h-8 mr-1"><IoMdListBox color="#4387FF"  size={30}/></div>;
const IconSheet = () => <div className=" h-8 mr-1"><TbTableFilled color="green"  size={30}/></div>;
const IconExcel = () => <div className=" h-8 mr-1"><BsFillFileExcelFill color="green"   size={30}/></div>;
const IconWord = () => <div className=" h-8 mr-1"><BsFillFileWordFill color="#4387FF" size={30}/></div> ;

export {
  IconForm,
  IconDoc,
  IconSheet,
  IconExcel,
  IconWord,
}
