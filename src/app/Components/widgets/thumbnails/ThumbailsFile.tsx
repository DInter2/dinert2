/* eslint-disable @next/next/no-img-element */
import { FileDto } from '@/types/File';
import React from 'react'
import { deflate } from 'zlib';

const ThumbailsFile = ({ files }: { files: FileDto[]}) => {
  return (
    <div>
      {files.map((file, index) => (
        <div key={index} className="w-1/4 p-4">
          <div className="bg-gray-200 rounded-lg p-4">
            <div className="text-gray-500 mb-2">{file.updatedAt}</div>

            <div className="font-semibold mb-2">{file.name}</div>
            <div>{file.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThumbailsFile;
