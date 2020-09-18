import React, { useContext } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Divider, IconButton, SwipeableDrawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

import { drawerStyles } from './style';
import { RootContext } from '../context/RootContext';
import { MailIcon, InboxIcon, Brightness4Icon, Brightness7Icon } from '../utils/MaterialIcons';

const Drawer = () => {
  const [rootStore, setRootStore] = useContext(RootContext);
  const classes = drawerStyles();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['HOME', 'MY WORK', 'CONTACT ME'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary={'THEME'} />
          <ListItemIcon>
            {rootStore.theme === 'light' ?
              <IconButton onClick={() => setRootStore({...rootStore, theme: 'dark'})}><Brightness4Icon /></IconButton> :
              <IconButton onClick={() => setRootStore({...rootStore, theme: 'light'})}><Brightness7Icon /></IconButton>
            }
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={rootStore.drawerOpen}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      classes={{
        paper: classes.drawer,
      }}
      onClose={() => setRootStore({ ...rootStore, drawerOpen: false })}
      onOpen={() => setRootStore({ ...rootStore, drawerOpen: true })}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setRootStore({ ...rootStore, drawerOpen: false })}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      {drawer}

    </SwipeableDrawer>
  )
}

export default Drawer;