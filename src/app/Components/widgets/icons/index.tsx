import { FaListAlt } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { TbTableFilled } from "react-icons/tb";
import { BsFillFileExcelFill, BsFillFileWordFill } from "react-icons/bs";
import Link from "next/link";


const IconForm = ({children, href}:{ href: string, children: React.ReactNode}) => (
  <a href={href} target="_blank" rel="noopener" className="p-2 space-x-2 my-2 col-span-1 rounded-lg bg-slate-300 ring-slate-600 flex w-full items-center justify-start">
      <FaListAlt color="purple"    size={25} className="mr-6"/>
      {children}
  </a>
);
const IconDoc = ({children, href}:{ href: string, children: React.ReactNode}) => (
  <a href={href} target="_blank" rel="noopener" className="p-2 space-x-2 my-2 col-span-1 rounded-lg bg-slate-300 ring-slate-600 flex w-full items-center justify-start">
      <IoMdListBox color="#4387FF"  size={30} className="mr-6"/>
      {children}
  </a>
);
const IconExcel = ({children, href}:{ href: string, children: React.ReactNode}) => (
  <a href={href} target="_blank" rel="noopener" className="p-2 space-x-2 my-2 col-span-1 rounded-lg bg-slate-300 ring-slate-600 flex w-full items-center justify-start">
      <BsFillFileExcelFill color="green"   size={30} className="mr-6"/>
      {children}
  </a>
);
const IconWord = ({children, href}:{ href: string, children: React.ReactNode}) => (
  <a href={href} target="_blank" rel="noopener" className="p-2 space-x-2 my-2 col-span-1 rounded-lg bg-slate-300 ring-slate-600 flex w-full items-center justify-start">
      <BsFillFileWordFill color="#4387FF" size={30} className="mr-6"/>
      {children}
  </a>
);
const IconSheet = ({children, href}:{ href: string, children: React.ReactNode}) => (
  <a href={href} target="_blank" rel="noopener" className="p-2 space-x-2 my-2 col-span-1 rounded-lg bg-slate-300 ring-slate-600 flex w-full items-center justify-start">
      <TbTableFilled color="green"  size={30} className="mr-6"/>
      {children}
  </a>
);
export {
  IconForm,
  IconDoc,
  IconSheet,
  IconExcel,
  IconWord,
}
