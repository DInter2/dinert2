import React from 'react'

const FolderLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="mx-auto pt-20 sm:px-6" >
      {children}
    </div>
  )
}

export default FolderLayout
