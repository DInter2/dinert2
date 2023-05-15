'use client'
import { Box, Paper, Typography } from '@mui/material'
import MuiMarkdown, { getOverrides } from 'mui-markdown'
import React from 'react'
const Markdown = ({content}: {content: string}) => {
  return (
      <Paper sx={{
        maxWidth: {xl: "75vw", lg: "70vw", xs: "85vw"},
        p: {md: 4, sm: 1 } ,
        fontSize: "ms"
      }}>
        <MuiMarkdown
          overrides={{
            ...getOverrides({}),
            a: {
              component: 'a',
              props: {
                style: {
                  color: 'blue',
                  textDecoration: "none",
                  },
              },
            },
            img: {
              component: "img",
              props: {
                style: {
                  marginTop: "15px",
                  marginBottom: "15px",
                  height: "300px",
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  maxWidth: "100%",
                  transform:" translate(-50%, -0%)",
                },
              } as React.HTMLProps<HTMLImageElement>,
            },
          }}>{content}</ MuiMarkdown>
      </Paper>
  )
}

export default Markdown
