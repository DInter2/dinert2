'use client'
import { Paper } from '@mui/material'
import React, { ReactNode } from 'react'

const LicksWrap = ({children}: {children: ReactNode}) => {
  return (
    <Paper sx={{
      maxWidth: {xl: "85vw", lg: "70vw", xs: "90vw"},
      boxSizing: "border-box",
      mx: "auto",
    }}>
      {children}
    </Paper>
  )
}

export default LicksWrap
