'use client'
import React, { ReactNode, useLayoutEffect, useState } from 'react'

export const AppBarRoot = ({ children }: { children: ReactNode }) => {
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return (
    <header
      className={`h-20 fixed w-[98vw] lg:w-[calc(98vw-270px)] lg:ml-[calc(270px+1vw)] box-border pl-[-2] p-2 z-10`}
    >
      <div
        className={`
          ${scrollPosition === 0
            ? ""
            : "shadow-md backdrop-blur-md"}
              w-full
              h-full
              rounded-lg 
              flex
              items-center
              justify-between
              lg:justify-end
            `}
      >
        {children}
      </div>
    </header>
  )
}
