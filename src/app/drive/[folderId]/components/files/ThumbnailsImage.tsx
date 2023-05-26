'use client'
import { DateBr } from '@/app/core/dateConvereter';
/* eslint-disable @next/next/no-img-element */
import { FileDto } from '@/types/File';

export default function Thumbnail({ file }: { file: FileDto }) {

  return (
    <div className="group/File col-span-1 bg-white hover:bg-gray-700 pt-1 shadow-md rounded-lg overflow-hidden duration-300 hover:-translate-y-1">
      <div className="relative min-w-full">
      <img
          className="rounded-md bg-white text-gray-800 object-cover h-[200px]  min-w-full"
          src={`https://lh3.google.com/u/0/d/${file.id}=s320-w320-h200-k-p`}
          alt={file.name}
          onError={({ currentTarget,  }) => {
            console.log("error de imagem")
            currentTarget.onerror = null;
            currentTarget.src = 'https://www.intranet.bombeiros.pe.gov.br/portal/storage/get/file/11680';
            currentTarget.classList.add("p-auto")
          }}
        />
        <span className="absolute top-0 right-0 m-2 px-2 py-1 bg-black text-white text-xs font-bold rounded"><DateBr date={file.updatedAt} /></span>
      </div>
      <div className="w-full px-2">
        <h3 className="text-lg font-semibold mb-2 break-words group-hover/File:text-white text-slate-500">{file.name}</h3>
        <p className="text-gray-600 text-sm">{file.description}</p>
      </div>
    </div>
  );
}

