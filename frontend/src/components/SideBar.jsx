import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, IconButton, Collapse, useMediaQuery } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import NoteIcon from '@mui/icons-material/Note';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../assets/logo.png'; 
import plus from "../assets/plus.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isDSAOpen, setIsDSAOpen] = useState(false);
  
  
  const isMobile = useMediaQuery('(max-width:600px)');
  
  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const handleToggleDSA = () => {
    setIsDSAOpen(!isDSAOpen);
  };

  const menuItems = [
    { text: 'System Design', icon: <LibraryBooksIcon /> },
    { text: 'Striver\'s DSA Playlist', icon: <PlaylistPlayIcon /> },
    { text: 'SDE Core Sheets', icon: <NoteIcon /> },
    { text: 'Saved Notes', icon: <NoteIcon /> },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {isMobile && (
        <IconButton
          onClick={handleToggleSidebar}
          sx={{
            margin: 1,
            color: '#de4227',
            
            zIndex: 1300,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={!isMobile || open}
        onClose={handleToggleSidebar}
        sx={{
          width: isMobile ? (open ? 240 : 0) : 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#000',
            color: '#fff',
            transition: 'width 0.3s',
            overflowX: 'hidden',
          },
        }}
      >
        <Box sx={{ textAlign: 'center', padding: '12px 0', backgroundColor: '#111' }}>
          <img src={logo} alt="Logo" style={{ maxWidth: '70%', margin: '0 auto' }} />
        </Box>
        <Divider sx={{ borderBottom: '2px solid #757575' }} /> 
        <List>
          <ListItem 
            button 
            onClick={handleToggleDSA}
            sx={{
              '&:hover': {
                color: '#de4227', 
              },
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="DSA Sheets" sx={{ fontFamily: 'Bright Grotesk Semibold' }} />
            {isDSAOpen ? <ExpandLessIcon sx={{ color: '#fff' }} /> : <ExpandMoreIcon sx={{ color: '#fff' }} />}
          </ListItem>
          <Collapse in={isDSAOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="* A2Z Sheet" sx={{ fontFamily: 'Bright Grotesk Semibold' }} />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="* Striver SDE Sheet" sx={{ fontFamily: 'Bright Grotesk Semibold' }} />
              </ListItem>
            </List>
          </Collapse>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              sx={{
                '&:hover': {
                  color: '#de4227', 
                },
              }}
            >
              <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={{ fontFamily: 'Bright Grotesk Semibold' }} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderBottom: '2px solid #757575' }} />
        <Box sx={{ textAlign: 'center', padding: '12px 0', backgroundColor: '#111' }}>
          <img src={plus} alt="Plus" style={{ maxWidth: '70%', margin: '0 auto' }} />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
