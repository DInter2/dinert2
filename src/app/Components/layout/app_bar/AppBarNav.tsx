'use client'
import React, { ReactNode } from 'react'

export const AppBarNav = ({children}:{children: ReactNode}) => {
  return (
    <nav className='flex'>
      {children}
    </nav>
  )
}
