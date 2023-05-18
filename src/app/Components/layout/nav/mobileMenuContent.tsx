import { FolderDto } from "@/types/Folder";
import BasicMenu from "../menu/MenuDrop";

export const MobileMenuContent = ({menus}: {menus: FolderDto[]}) => {
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {menus.sort(function (str1, str2) {
        return str1.name.localeCompare(str2.name);
      }).map((menu)=>{
        return  <BasicMenu key={menu.id} menu={menu}/>
      })}

        <a href="/drive" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"></a>
    </div>
  )
}
