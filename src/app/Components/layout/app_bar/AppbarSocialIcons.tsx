'use client'
import React from 'react'
import { IconButton } from '@mui/material'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
export const AppbarSocialIcons = () => {
  return (
    <>
      <IconButton href="https://www.instagram.com/dinter.2/" target="_blank">
        <AiFillInstagram />
      </IconButton>
      <IconButton href="https://www.youtube.com/dinter2cbmpe" target="_blank">
        <AiFillYoutube />
      </IconButton>
    </>
  )
}