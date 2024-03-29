'use client'
import {
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { darkTheme } from "../../client/theme/MuiTheme.Theme";
import { Logo } from "../logo/Logo";
import { ReactNode } from "react";
import { MdClose } from "react-icons/md"
import useMenuDawer from "../../client/hooks/useMenuDrawer";


export default function ResponsiveDrawer({children}:{ children: ReactNode }) {
  const menuDrawer = useMenuDawer()
  return (
    <ThemeProvider theme={darkTheme}>
        <Drawer
          variant="temporary"
          open={menuDrawer.isOpen}
          onClose={menuDrawer.onClose}
          ModalProps={{ keepMounted: true }}
          >
          <div className="realtive">
          <div className={`
              fixed
              bg-[url('/images/drawer.jpg')]
              bg-no-repeat
              bg-cover
              bg-top
              w-64
              h-[calc(100vh)]
            `}>
          </div>
          <div className="fixed z-40 backdrop-blur-md w-64">
              <Toolbar sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}} >
                <Logo  />
                <IconButton onClick={menuDrawer.onClose} >
                  <MdClose />
                </IconButton>
              </Toolbar>
            </div>
          <div className="w-64 pt-20 z-30">
            {children}
          </div>
          </div>
        </Drawer>

        <div className={`
          fixed
          h-[calc(100vh-16px)]
          box-border
          m-2
          overflow-auto
          lg:block
          hidden
          w-[66]
          shadow-lg
          `}
        >
        <div className="realtive shadow-lg">
          <div className={`
              fixed
              bg-[url('/images/drawer.jpg')]
              bg-no-repeat
              bg-cover
              bg-top
              w-64
              rounded-md
              h-[calc(100vh-16px)]
              shadow-lg
            `}>
          </div>
            <div className="fixed z-40 backdrop-blur-md w-64 mt-2 shadow-md">
              <Toolbar sx={{display: "flex", alignItems: "center", justifyContent: "space-between", zIndex:100}} >
                <Logo  />
              </Toolbar>
            </div>
          <div className="w-64 pt-24">
            {children}
          </div>
          </div>
        </div>
    </ThemeProvider>
  );
}
