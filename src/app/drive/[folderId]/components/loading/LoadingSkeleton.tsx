'use client'
import Skeleton from '@/app/Components/widgets/skeleton/Skeleton'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const LoadingSkeleton = () => {
  const searchParams = useSearchParams();
  return (
    <div>
    <h2 className='text-gray-900'>{searchParams.get("title")}</h2>
      <Skeleton classProps='rounded-sm' />
      <p className='text-gray-900'>Conteúdo</p>
      <Skeleton classProps='rounded-sm' />
    </div>
  );
}

export default LoadingSkeleton
