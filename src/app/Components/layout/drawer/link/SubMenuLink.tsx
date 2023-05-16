'use client'
import { useSidebar } from "@/app/Components/client/sidebar/Sidebar.Context";
import { FolderDto } from "@/app/types/Folder";
import { List, ListItemButton, ListItemText, Typography } from "@mui/material"
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  onClick: React.MouseEventHandler<HTMLAnchorElement>
  menu: FolderDto;
}
const DiretoryDrawer = ({ onClick, menu}: Props) =>  {
  const { isOpen, toggleSidebar } = useSidebar();
  const url = useRouter()
  const isActive = decodeURI(url.asPath).includes(`/drive/${menu.id}`);
  return (
    <Link
      href={`/drive/${menu.id}`}
      onClick={onClick}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <List component="div" disablePadding >
        <ListItemButton sx={{
          my: 1,
          mx: 2,
          borderRadius: 2,
          backdropFilter: "blur(4px)",
          bgcolor: isActive? "#D35400" : "rgba(0, 0, 0, 0)",
          display: "flex",
          alignItems: "end",
          justifyContent: "end"
          }}>
          <ListItemText
            sx={{
              mb: -0.25,
              display: "flex",
              alignItems: "center",
              justifyContent: "initial"
              }}
          secondary={(
            <Typography variant="subtitle2"   display="block" gutterBottom>
            {menu.name.split("-")[1]}
            </Typography>
          )} />
        </ListItemButton>
      </List>
    </Link>
  );
}

export default DiretoryDrawer
