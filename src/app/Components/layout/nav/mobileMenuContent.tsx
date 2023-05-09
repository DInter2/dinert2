import { Folder } from "@/app/drive/page";

export const MobileMenuContent = ({menus}: {menus: Folder[]}) => {
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {menus.sort(function (str1, str2) {
        return str1.name.localeCompare(str2.name);
      }).map((menu)=>{
        const name = menu.name.split("_")[1];
         return <a key={menu.id} href={`/${name.toLowerCase()}`} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          {name}
          </a>
      })}
      <a href="/drive" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          DRIVE
          </a>
      </div>
  )
}
