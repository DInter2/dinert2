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
import { useSidebar } from "../../client/sidebar/Sidebar.Context";
import { MdClose } from "react-icons/md"


type ResponsiveDrawerProps = {
  open: boolean;
  onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void);
}
export default function ResponsiveDrawer({children}:{ children: ReactNode }) {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <ThemeProvider theme={darkTheme}>
        <Drawer
          variant="temporary"
          open={isOpen}
          onClose={toggleSidebar}
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
                <IconButton onClick={toggleSidebar} >
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
          z-50
          m-2
          overflow-auto
          lg:block
          hidden
          w-[66]
          `}
        >
        <div className="realtive">
          <div className={`
              fixed
              bg-[url('/images/drawer.jpg')]
              bg-no-repeat
              bg-cover
              bg-top
              w-64
              rounded-md
              h-[calc(100vh-16px)]
            `}>
          </div>
            <div className="fixed z-40 backdrop-blur-md w-64 mt-2">
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
