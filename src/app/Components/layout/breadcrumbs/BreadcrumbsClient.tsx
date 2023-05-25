"use client"
import Link from '@mui/material/Link';
import  { GrFormNext } from 'react-icons/gr';
import  { MdHome } from 'react-icons/md';
import { FolderPath } from '@/types/FolderPath';

const pathArrayFactory= (path: FolderPath): FolderPath[] => {

  let letPath: FolderPath = path
  let  array: FolderPath[] =  []

  while (letPath!!) {
    array = [...array, {
      id: letPath.id,
      name: letPath.name,
      path: null
    }]
    letPath = letPath.path!
  }
  return array
}
const BreadcrumbsClient = ({ folderPath }: {folderPath?: FolderPath}) => {

  if(folderPath === undefined){
    return <div />
  }
  const breadcrumbs = pathArrayFactory(folderPath!).reverse()
  breadcrumbs.shift()
  breadcrumbs.shift()

return (
  <nav className="flex items-center px-2 overflow-x-auto mx-auto max-w-[98vw]">
    <Link
      href={`/`}
      className="text-gray-500 hover:text-gray-700 transition-colors duration-300 no-underline flex items-center"
    >
      <MdHome className="h-6 w-6 text-gray-500 mr-2" />
      {"Início"}
    </Link>
    {breadcrumbs!! && breadcrumbs.map((item, index) => (
      <div key={item.id} className="flex items-center">
        {item.name!! && <span  className="h-4 w-4"><GrFormNext className="h-4 w-4 text-gray-500" /></span>}
        <Link
          href={`/drive/${item.id}`}
          className="text-gray-500 hover:text-gray-700 min-w-fit transition-colors duration-300 no-underline"
        >
          {item.name.includes("-")? item.name.split("-")[1]: item.name.split("_")[1]}
        </Link>
      </div>
    ))}
  </nav>
);
}

export default BreadcrumbsClient





