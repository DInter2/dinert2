'use client'
import { IconButton } from '@mui/material'
import React from 'react'
import { GoSearch } from 'react-icons/go'
import useSearchModal from '../../client/hooks/useSearchModal'
import { AuthUser } from '@/app/actions/getCurrentUser'

export const AppBarSearchIcon = ({currentUser}:{currentUser?: AuthUser}) => {
  const searchModal = useSearchModal()
  return (
    <IconButton onClick={()=>{}}>
    	{currentUser! && <GoSearch onClick={()=> searchModal.onOpen()}/>}
  	</IconButton>
  )
}
