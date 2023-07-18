/* eslint-disable @next/next/no-img-element */
'use client'

import * as React from 'react';
import useSearchModal from '../client/hooks/useSearchModal';
import Modal from './Modal';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { FileDto } from '@/types/File';
import { FolderDto } from '@/types/Folder';
import Link from 'next/link';
import { Tooltip } from '@mui/material';

export default function SearchModal() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<FolderDto | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setIsSearching(true);
  };
const searchModal = useSearchModal()

useEffect(() => {
  const delaySearch = setTimeout(() => {
    if (searchTerm && isSearching) {
      axios
        .get<FolderDto>(`/api/file/${searchTerm}`)
        .then((response) => {
          setSearchResults(response.data);
          setIsSearching(false);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
          setIsSearching(false);
        });
    }
  }, 500);

  return () => clearTimeout(delaySearch);
}, [searchTerm, isSearching]);


  const bodyContent  = (
    <div className="relative overflow-y-visible">
      <input
        type="text"
        className="border rounded-md p-2 min-w-full focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {isSearching && (
        <div className="absolute top-12 left-0 w-64 bg-white border border-gray-300 p-2">
          <p className="text-gray-600">Carregando...</p>
        </div>
      )}
      {!isSearching && searchResults?.files.length! > 0 && (
        <div className="absolute top-12 right-0 min-w-full bg-white border border-gray-300 p-2">
          <ul>
            {searchResults?.files.map((result) => (
              <li className='h-10 flex-row items-center justify-around overflow-clip' key={result.id}>
                <Link target="_blank" href={result.url}>
                 <div className="flex items-center space-x-4 h-9 w-9">
                  <img src={result.thumbnail} alt="" className=" flex-none h-full w-9 object-contain rounded-lg bg-slate-100" loading="lazy" />
                <Tooltip title={result.name}  disableInteractive>
                  <div className="min-w-9 flex-auto space-y-1 font-semibold ">
                    <h2 className="text-sm leading-6 truncate">
                      { result.name }
                    </h2>
                  </div>
                </ Tooltip>
                </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
  return (
    <Modal
      // disabled={isLoading}
      isOpen={searchModal.isOpen}
      title="Pesquisar"
      onClose={()=>{
        setSearchResults(null)
        setSearchTerm('')
        searchModal.onClose()
      }}
      // actionLabel='Buscar'
      onSubmit={()=>{}}
      disabled={isSearching}
      body={bodyContent}
    />
  );
}

