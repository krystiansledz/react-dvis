import React from 'react';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Drawer
      sx={{
        width: 200,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 200,
          boxSizing: 'border-box',
        },
        a: {
          textDecoration: 'none',
          color: 'text.primary',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <List>
        <Link to='/generator'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary='Generator' />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {[
          { text: 'WFiIS', path: 'example1' },
          { text: 'Weather', path: 'example2' },
        ].map(({ text, path }) => (
          <Link key={path} to={path}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Nav;
