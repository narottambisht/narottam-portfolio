import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

const homeStyles = makeStyles(theme => ({
  rootContainer: {
    backgroundColor: "#f5f5f5"
  },
  profileImage: {
    width: "180px",
    height: "180px",
    borderRadius: "100%"
  },
  toolbar: {
    alignSelf: 'flex-end',
  },
  profileImageGrid: {
    textAlign: 'center'
  },
  containerGrid: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 1160
    },
    paddingBottom: 30,
    marginLeft: 'auto', 
    marginRight: 'auto'
  },
  headerIntro: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 25
    },
    alignSelf: 'center',
  },
  profileIntroSpacing: {
    marginTop: 5
  },
  profileIntroName: {
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      marginTop: 5
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerIcon: {
    textAlign: 'end'
  }
}));

export default homeStyles;