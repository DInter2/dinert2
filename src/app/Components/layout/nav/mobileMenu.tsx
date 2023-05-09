'use client'
export const MobileMemu = ({children}: { children: React.ReactNode}) => {
  return (
    <div className="hidden md:block">
      {children}
    </div>
  )
}
