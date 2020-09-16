import React, { useState, useContext } from 'react';
import { Button, Typography, Container, Grid, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { RootContext } from '../../context/RootContext';
import homeStyles from './styles';

import Drawer from '../../components/Drawer';

const Home = (props) => {
  const [rootStore, setRootStore] = useContext(RootContext);
  const classes = homeStyles();

  return (
    <React.Fragment>
      <Container className={classes.rootContainer} maxWidth={false}>
        <div className={classes.drawerIcon}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => setRootStore({ ...rootStore, drawerOpen: true })}
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
        <Drawer />
      </Container>
    </React.Fragment>
  )
}

export default Home;