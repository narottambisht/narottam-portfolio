import React, { useContext } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Divider, IconButton, SwipeableDrawer } from '@material-ui/core';
import { RootContext } from '../context/RootContext';
import { drawerStyles } from './style';

const Drawer = () => {
  const [rootStore, setRootStore] = useContext(RootContext);
  const classes = drawerStyles();

  return (
    <SwipeableDrawer
      anchor="right"
      open={rootStore.drawerOpen}
      onClose={() => setRootStore({ ...rootStore, drawerOpen: false })}
      onOpen={() => setRootStore({ ...rootStore, drawerOpen: true })}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => setRootStore({ ...rootStore, drawerOpen: false })}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
    </SwipeableDrawer>
  )
}

export default Drawer;