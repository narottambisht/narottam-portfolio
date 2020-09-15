import React, { useState } from 'react';
import { Button, Typography, Container, Grid, Divider, IconButton, SwipeableDrawer } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';

import homeStyles from './styles';

const Home = (props) => {
  const [drawerStatus, toggleDrawerStatus] = useState(false)
  const classes = homeStyles();
  return (
    <React.Fragment>
      <Container className={classes.rootContainer} maxWidth={false}>
        <div className={classes.drawerIcon}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => toggleDrawerStatus(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Grid container className={classes.containerGrid} justify={'center'}>
          <Grid item lg={2} md={2} sm={12} className={classes.profileImageGrid}>
            <img src="images/profile.jpg" className={classes.profileImage} alt="Narottam Singh Bisht" />
          </Grid>
          <Grid item lg={4} md={4} sm={12} className={classes.headerIntro}>
            <Typography variant="h4" className={classes.profileIntroName}>
              Narottam Singh
            </Typography>
            <Typography variant="h5" className={classes.profileIntroSpacing}>
              Fullstack Developer
            </Typography>
            <Typography variant="h5" className={classes.profileIntroSpacing}>
              Narottam Singh
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} style={{ alignSelf: 'center', textAlign: 'end' }}>
            <Button className={classes.downloadCvButton}>Download CV</Button>
          </Grid>
        </Grid>
        <SwipeableDrawer
          anchor="right"
          open={drawerStatus}
          onClose={() => toggleDrawerStatus(false)}
          onOpen={() => toggleDrawerStatus(true)}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => toggleDrawerStatus(false)}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <Divider />
        </SwipeableDrawer>
      </Container>
    </React.Fragment>
  )
}

export default Home;