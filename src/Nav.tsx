import React from 'react';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const location = useLocation();

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
            <StyledButton $active={location.pathname.includes('/generator')}>
              <ListItemText primary='Generator' />
            </StyledButton>
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
              <StyledButton $active={location.pathname.includes(path)}>
                <ListItemText primary={text} />
              </StyledButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Nav;

const StyledButton = styled(ListItemButton)<{ $active: boolean }>`
  color: ${({ theme, $active }) => ($active ? theme.palette.primary.main : undefined)};
`;
