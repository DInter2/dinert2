'use client'
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link
  href="/"
    style={{ textDecoration: "none", color: "inherit" }}>
    <Box sx={{ display: 'flex', alignItems: 'center'}}>
      <Image
      className="mr-2"
         width={35}
       src='https://www.intranet.bombeiros.pe.gov.br/portal/storage/get/file/11680'
        alt='logo'
        height={35} />
      <Typography color="text.primary" component="h6" variant="h6" fontWeight="bold">DInter 2</Typography>
    </Box>
  </Link>
)
