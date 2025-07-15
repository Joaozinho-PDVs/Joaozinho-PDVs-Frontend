'use client'

import { Box, Divider, Drawer, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Assessment, Castle, ContentCut, CreditCard, LocalAtm, ManageAccounts, Warehouse, WhatsApp } from "@mui/icons-material";
import Image from 'next/image';
import Link from "next/link";

export default function SideBar(){
  const [drawerOpen, setDrawerOpen] = useState(false);

  return(
    <Box>
      <IconButton sx={{color: 'primary.contrastText'}} onClick={() => setDrawerOpen(true)}>
        <MenuIcon/>
      </IconButton>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{display: "flex", justifyContent: "center", width: "100%", }}>
          <Image 
            src="/logo.png"
            alt="Logo"
            width={64}
            height={64}
          />
        </Box>
        <Divider/>
        <MenuList sx={{width: '250px'}}>
          <Link href="/">
            <MenuItem>
              <ListItemIcon>
                <Assessment fontSize="small" />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </MenuItem>
          </Link>
          <Link href="/pdv">
            <MenuItem>
              <ListItemIcon>
                <CreditCard fontSize="small" />
              </ListItemIcon>
              <ListItemText>PDV</ListItemText>
            </MenuItem>
          </Link>
          <Link href="/estoque">
            <MenuItem>
              <ListItemIcon>
                <Warehouse fontSize="small" />
              </ListItemIcon>
              <ListItemText>Estoque</ListItemText>
            </MenuItem>
          </Link>
          <Link href="/vendas">
            <MenuItem>
              <ListItemIcon>
                <LocalAtm fontSize="small" />
              </ListItemIcon>
              <ListItemText>Vendas</ListItemText>
            </MenuItem>
          </Link>
        </MenuList>
      </Drawer>
    </Box>
  );
}