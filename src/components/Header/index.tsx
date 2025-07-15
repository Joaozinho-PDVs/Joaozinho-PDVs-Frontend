'use client'

import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, Stack, Toolbar, Typography,  } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactNode } from 'react';
import { Backup, Cached, Event, Feedback, Forum, VolumeUp, WhatsApp } from '@mui/icons-material';
import SideBar from '@/components/SideBar';

export default function Header({ children }: { children: ReactNode }){
  return(
    <AppBar elevation={0} position="static">
      <Toolbar disableGutters sx={{ alignItems: 'center' }}>
        <SideBar/>
        <Box sx={{
          flexGrow: 1, 
          display: { xs: 'none', md: 'flex' }, 
          flexDirection:'row-reverse', 
          alignItems: 'center' 
        }}>
          <IconButton sx={{marginLeft: "1rem"}}>
            <Avatar> CL </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
      {children}
    </AppBar>
  );
}