'use client'
import MuiMarkdown from 'mui-markdown'
import React from 'react'
const Markdown = ({content}: {content: string}) => {
  return (
      <div className="prose prose-xl max-w-none py-10">
      <MuiMarkdown
        overrides={{
          a: {
            component: 'a',
            props: {
              style: {
                color: 'blue',
                textDecoration: "none",
                },
            },
          },
          h1: {
            component: "h1",
            props:{
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }
            } as React.HTMLProps<HTMLHeadElement>
          },
          p: {
            component: "p",
            props:{
              style: {
                textIndent: "2rem",
                textAlign: "justify",
              }
            } as React.HTMLProps<HTMLParagraphElement>
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
      </div>
  )
}

export default Markdown
