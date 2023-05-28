'use client'
/* eslint-disable @next/next/no-img-element */
import { DateBr } from '@/app/core/dateConvereter';
import { FileDto } from '@/types/File';
import { Tooltip } from '@mui/material';
import Link from 'next/link';

export default function Thumbnail({ file }: { file: FileDto }) {

  return (
    <Link href={file.url}>
      <div className="group/File col-span-1 bg-white hover:bg-gray-600 pt-1 shadow-md rounded-lg overflow-hidden duration-300 hover:-translate-y-1">
        <div className="relative min-w-full h-40 rounded-md bg-gray-200">
          <img
              className="text-gray-800 object-contain pt-4 min-w-full"
              src={`https://lh3.google.com/u/0/d/${file.id}=s320-w320-h200-k-p`}
              alt={file.name}
              onError={({ currentTarget,  }) => {
                currentTarget.onerror = null;
                currentTarget.src = '/images/google-drive.png';
                currentTarget.classList.add("p-auto")
              }}
            />
          <span className="absolute top-0 right-0 m-2 px-2 py-1 bg-black text-white text-xs font-bold rounded"><DateBr date={file.updatedAt} /></span>
        </div>
        <Tooltip title={file.name} arrow disableInteractive>
          <div className="group/tootip w-full p-4 truncate flex relative">
            <h3 className="truncate text-base font-semibold break-words group-hover/File:text-white text-slate-500">{file.name}</h3>
            <p className="text-gray-600 text-sm">{file.description}</p>
          </div>
        </Tooltip>
      </div>
    </Link>
  );
}

