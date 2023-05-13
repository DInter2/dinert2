'use client'
import React, { useLayoutEffect, useState } from 'react'
import AppBarHeader from '../header/AppBarHeader';
import ResponsiveDrawer from '../drawer/ResponsiveDrawer';

const HeaderDrawer = ({ children }: {children: React.ReactNode}) => {
  const [scrollPosition, setPosition] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return (
    <div>
        <AppBarHeader scrollPosition={scrollPosition} handleDrawerToggle={handleDrawerToggle} />
        <ResponsiveDrawer randle={{
          onClose: handleDrawerToggle,
          open:mobileOpen
        }} >{children}</ResponsiveDrawer>
    </div>
  )
}

export default HeaderDrawer
