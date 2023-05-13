'use client'

import { IconButton } from '@mui/material'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
function SocialIcons() {
  return (
    <>
      <IconButton href="https://www.instagram.com/dinter.2/">
        <AiFillInstagram />
      </IconButton>
      <IconButton href="https://www.youtube.com/dinter2cbmpe">
        <AiFillYoutube />
      </IconButton>
    </>
  )
}

export default SocialIcons
