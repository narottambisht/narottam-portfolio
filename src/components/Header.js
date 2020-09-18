import React, { useContext, useEffect } from 'react';
import { Button, Typography, Container, Grid, IconButton, CssBaseline, Tooltip } from '@material-ui/core';
import { Route } from 'react-router-dom';

import Drawer from './Drawer';
import Home from '../containers/Home';
import { headerStyles } from './style';
import MyWork from '../containers/MyWork';
import { firestoreDB } from '../utils/FirebaseConfig';
import { RootContext } from '../context/RootContext';
import { MenuIcon, FacebookIcon, TwitterIcon, GitHubIcon, LinkedInIcon, InstagramIcon } from '../utils/MaterialIcons';

const Header = props => {
  useEffect(() => {
    firestoreDB.collection('portfolio-info').onSnapshot(snapshot => {
      snapshot.docs.map(doc => console.log('doc', doc.data()));
    });
  }, []);

  const [rootStore, setRootStore] = useContext(RootContext);

  const classes = headerStyles();

  return (
    <React.Fragment>
      <Container maxWidth={false}>
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
          <CssBaseline />
          <Grid item lg={2} md={2} sm={12} className={classes.profileImageGrid}>
            <img src="images/profile.jpg" className={classes.profileImage} alt="Narottam Singh Bisht" />
          </Grid>
          <Grid item lg={5} md={4} sm={12} className={classes.headerIntro}>
            <Typography variant="h4" className={classes.profileIntroName}>
              Hey 👋 Welcome
              <span role="img" aria-label="welcome-emoji"> 🤓</span>,
              <br />
              I'm NAROTTAM SINGH
              <span role="img" aria-label="name-emoji">🕺🙇‍♂️</span>
            </Typography>
            <Typography variant="h5" className={classes.profileIntroSpacing}>
              Coder 💻| Freelancer 👷🏻| Traveller <span role="img" aria-label="designation-emoji">✈️</span>
            </Typography>
            <div>
              <Tooltip title="Connect with me on Facebook">
                <IconButton edge={'start'}><FacebookIcon /></IconButton>
              </Tooltip>
              <Tooltip title="Follow me on my twitter handle @narottam_bisht">
                <IconButton><TwitterIcon /></IconButton>
              </Tooltip>
              <Tooltip title="Checkout my Github profile">
                <IconButton><GitHubIcon /></IconButton>
              </Tooltip>
              <Tooltip title="Connect with me on my LinkedIn page">
                <IconButton><LinkedInIcon /></IconButton>
              </Tooltip>
              <Tooltip title="Connect with me on my LinkedIn page">
                <IconButton><InstagramIcon /></IconButton>
              </Tooltip>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12} />
          <Grid item lg={2} md={3} sm={12} justify={'center'} className={classes.downloadCvGrid}>
            <div className={classes.lottieAnimationDiv} id="lottie"></div>
          </Grid>
        </Grid>
        <Drawer />
      </Container>
      <Route path={'/'} component={Home} />
      <Route path={'/my-work'} component={MyWork} />
    </React.Fragment>
  )
}

export default Header;