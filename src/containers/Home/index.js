import React, { useEffect, useContext } from 'react';
import lottie from 'lottie-web';
import { Grid, IconButton, CssBaseline, Card, Chip, CardContent, CardHeader, Divider } from '@material-ui/core';

import homeStyles from './styles';
import Header from '../../components/Header';

const Home = (props) => {

  const classes = homeStyles();

  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('lottie'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'images/programming-man.json'
    });
  }, [])

  return (
    <React.Fragment>
      <Grid container spacing={2} className={classes.containerGrid}>
        <Grid item lg={8} sm={12} spacing={2}>
          <Grid item>
            <Card>
              <CardHeader title={'🕴️ ABOUT ME'} />
              <Divider />
              <CardContent style={{ textAlign: 'justify' }}>
                <li>Energetic, results-oriented software engineer with 2+ years of experience in software development industry.</li>
                <li>A diligent and avid team player who never backs down. A person with a passion for coding and learning new technologies and frameworks.</li>
                <li>In the past 2 years I had exposure to variety of javascript frameworks like NodeJs, ReactJs, Redux, Redux Saga, Sequelize, Mongoose, PassportJs and GIT with which I have worked on many web applications both front-end and back-end.</li>
                <li>Currently I am learning Python as well because it intrigues me how much this language can do. I have excellent comm. Skills.</li>
                <li>I have been awarded best student of the year award in my college as well.</li>
                <li>As of now I am looking for a job in a good company where I can hone my skills and have a friendly, co-operative, chill and a relaxing work enviornment. Once I get it beers on me.</li>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card>dfdff</Card>
          </Grid>
        </Grid>
        <Grid item lg={4} sm={12}>
          <Grid item>
            <Card>
              <CardHeader title={'🛠 SKILLS'} />
              <Divider />
              <CardContent style={{ textAlign: 'justify' }}>
                Coding has been my passion from college times and till now my technology stack has been mostly javascript and its frameworks. I have worked on both backend and frontend frameworks. I have handled projects from Requirement Analysis then Design then Implementation of Database schema design and backend and frontend archtecture then testing then deployment and maintainance using AWS EC2 instances.
              </CardContent>
              <Divider />
              <div className={classes.skillsSection}>
                <Chip label="Node.Js" />
                <Chip label="Express.Js" />
                <Chip label="Rest API" />
                <Chip label="Firebase" />
                <Chip label="MongoDb" />
                <Chip label="MySQL" />
                <Chip label="MERN Stack" />
                <Chip label="React.Js" />
                <Chip label="Redux" />
                <Chip label="Context-API" />
                <Chip label="Redux-Saga" />
                <Chip label="GIT" />
                <Chip label="AWS EC2" />
              </div>
            </Card>
          </Grid>
          <Grid item>
          <Card>dfdff</Card>
        </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Home;