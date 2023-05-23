import { FaListAlt } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { TbTableFilled } from "react-icons/tb";
import { BsFillFileExcelFill, BsFillFileWordFill } from "react-icons/bs";

const IconForm = ()  => < FaListAlt color="purple" size={20}/>;
const IconDoc = () => <IoMdListBox color="#4387FF" size={25}/>;
const IconSheet = () => <TbTableFilled color="green" size={25}/>;
const IconExcel = () => <BsFillFileExcelFill color="green" size={25}/>;
const IconWord = () => <BsFillFileWordFill color="#4387FF" size={25}/>;

export {
  IconForm,
  IconDoc,
  IconSheet,
  IconExcel,
  IconWord,
}
