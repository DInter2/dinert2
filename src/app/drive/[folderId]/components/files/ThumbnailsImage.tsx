'use client'
import { DateBr } from '@/app/core/dateConvereter';
/* eslint-disable @next/next/no-img-element */
import { FileDto } from '@/types/File';

export default function Thumbnail({ file }: { file: FileDto }) {

  return (
    <div className="group/File max-w-xs mx-auto bg-white hover:bg-orange-500 pt-1 shadow-md rounded-lg overflow-hidden duration-300 hover:-translate-y-1">
      <div className="relative">
      <img
          className="max-w-full rounded-md group-hover/File:text-white text-gray-800 object-contain w-320 h-320"
          src={`https://lh3.google.com/u/0/d/${file.id}=s320-w320-h200-k-p`}
          width={320}
          height={320}
          alt={file.name}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.append();
          }}
        />
        <span className="absolute top-0 right-0 m-2 px-2 py-1 bg-black text-white text-xs font-bold rounded"><DateBr date={file.updatedAt} /></span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 break-words group-hover/File:text-white text-slate-500">{file.name}</h3>
        <p className="text-gray-600 text-sm">{file.description}</p>
      </div>
    </div>
  );
}

