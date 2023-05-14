'use client'
import {
  Box,
  Divider,
  Drawer,
  Toolbar,
} from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { darkTheme } from "../../client/theme/MuiTheme.Theme";
import { drawerWidth } from "../../consts/drawerWidth";
import { Logo } from "../logo/Logo";
import { ReactNode } from "react";
import { useSidebar } from "../../client/sidebar/Sidebar.Context";


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
        sx={{ width: { sm: 100}, flexShrink: { sm:0 }}}
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
              height: `calc(98vh)`,
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundImage:'url(/images/drawer.jpg)',
              "&:before":{
                opacity: 0.4,
                bgcolor: "black",
                content: "' '",
                display: "block",
                position: "fixed",
                left: 0,
                top: 0,
                width: drawerWidth,
                height: `calc(98vh)`,
                zIndex: 0,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 0",
                backgroundSize: "cover",
              }
            },
          }}
        >
          <Toolbar >
            <Logo  />
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
              // zIndex: 1,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundImage:'url(/images/drawer.jpg)',
              "&:before":{
                opacity: 0.4,
                bgcolor: "black",
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
                backgroundPosition: "50% 0",
                backgroundSize: "cover",
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

// const Drawer = ({ isOpen, onClose, children }) => {
//   return (
//     <div className={`fixed inset-0 overflow-hidden ${isOpen ? "z-50" : "-z-1"}`}>
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 transition-opacity" aria-hidden="true">
//           <div
//             className="bg-cover bg-center h-full"
//             style={{
//               backgroundImage:
//                 "url('https://caminho/para/imagem-de-fundo.jpg')",
//             }}
//           ></div>
//         </div>

//         <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
//           <div className="w-screen max-w-md">
//             <div className="h-full divide-y divide-gray-200 bg-white shadow-xl overflow-y-auto">
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
