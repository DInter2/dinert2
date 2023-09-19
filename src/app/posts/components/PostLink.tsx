'use client'
import usePostModal from '@/app/Components/client/hooks/usePostModal';
import React, { ReactNode } from 'react'

export const PostLink = ({children, post: {content, title}}:{children: ReactNode, post: {content: string, title: string}}) => {
    const loginModal = usePostModal();
  return (
    <div className='max-w-full overflow-y-hidden' onClick={()=>loginModal.onOpen({content, title})}>{children}</div>
  )
}
