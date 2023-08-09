'use client'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { darkTheme } from "../../client/theme/MuiTheme.Theme";
import { drawerWidth } from "../../consts/drawerWidth";
import { Logo } from "../logo/Logo";
import { ReactNode } from "react";
import { useSidebar } from "../../client/sidebar/Sidebar.Context";
import { MdClose } from "react-icons/md"
import zIndex from "@mui/material/styles/zIndex";


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
              h-screen
            `}>
          </div>
              <Toolbar sx={{display: "flex", alignItems: "center", justifyContent: "space-between", zIndex:100}} >
                <Logo  />
                <IconButton onClick={toggleSidebar} >
                  <MdClose />
                </IconButton>
              </Toolbar>
          <div className="h-screen">
            {children}
          </div>
          </div>
        </Drawer>

        <div className={`
          fixed
          h-[calc(100vh-16px)]
          box-border
          m-2
          -mt-14
          overflow-auto
          lg:visible
          invisible
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
              <Toolbar sx={{display: "flex", alignItems: "center", justifyContent: "space-between", zIndex:100}} >
                <Logo  />
              </Toolbar>
          <div className="h-screen">
            {children}
          </div>
          </div>
        </div>
    </ThemeProvider>
  );
}
