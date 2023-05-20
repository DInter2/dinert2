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


type ResponsiveDrawerProps = {
  open: boolean;
  onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void);
}
export default function ResponsiveDrawer({children}:{ children: ReactNode }) {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        position="absolute"
        component="nav"

        sx={{ width: { sm: "90%"}, flexShrink: { sm:0 }}}
      >
        <Drawer
          style={{width: drawerWidth,}}
          variant="temporary"
          open={isOpen}
          onClose={toggleSidebar}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block",
            lg: "none",
           },
            "& .MuiDrawer-paper": {
              height: `calc(100vh)`,
              minHeight: `calc(100vh)`,
              boxSizing: "border-box",
              width: drawerWidth,
              pb: 6,
              "&:before":{
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundImage:'url(/images/drawer.jpg)',
                opacity: 0.7,
                bgcolor: "transparent",
                content: "' '",
                display: "block",
                position: "fixed",
                left: 0,
                top: 0,
                width: drawerWidth,
                minHeight: `calc(100vh)`,
                zIndex: 0,
                backgroundRepeat: "no-repeat",
                pb: 6,
              }
            },
          }}
        >
          <Toolbar sx={{display: "flex", alignItems: "center", justifyContent: "space-between" }} >
            <Logo  />
            <IconButton onClick={toggleSidebar} >
              <MdClose />
            </IconButton>
          </Toolbar>
          <Divider color="white"/>
          {/* <MenuDrawerList /> */}
          {children}
          {/* <Section {...{ onClose, open }} />  */}
        </Drawer>

        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none",
            lg: "block",
           },
            "& .MuiDrawer-paper": {
              borderRadius: 2,
              height: `calc(98vh)`,
              m:"1vh",
              boxSizing: "border-box",
              width: drawerWidth,
              pb: 6,
              // zIndex: 1,
              "&:before":{
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundImage:'url(/images/drawer.jpg)',
                opacity: 0.7,
                bgcolor: "transparent",
                borderRadius: 2,
                m:"1vh",
                content: "' '",
                display: "block",
                position: "fixed",
                left: 0,
                top: 0,
                width: drawerWidth,
                height: `calc(98vh)`,
                zIndex: 0,
                backgroundRepeat: "no-repeat",
                pb: 6,
              }

              // backgroundColor: "color.primary",
            },
          }}
        >
          {/* <Box sx={{zIndex: 1}}> */}
          <Toolbar >
            <Logo  />
          </Toolbar>
          <Divider color="white"/>
          {children}
            {/* <MenuDrawerList /> */}
            {/* <Section {...{ onClose, open }} /> */}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
