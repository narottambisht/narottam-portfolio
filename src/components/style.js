import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

const drawerStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerIcon: {
    textAlign: 'end'
  }
}));

export { drawerStyles };