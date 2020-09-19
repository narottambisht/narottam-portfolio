import React, { useEffect, useContext } from 'react';
import lottie from 'lottie-web';
import { Grid, Card, Chip, CardContent, CardHeader, Divider } from '@material-ui/core';

import homeStyles from './styles';
import { firestoreDB } from '../../utils/FirebaseConfig';
import { SkillsContext } from '../../context/SkillsContext';
import { PortfolioInfoContext } from '../../context/PortfolioInfoContext';

const Home = (props) => {
  const [skills, setSkills] = useContext(SkillsContext);
  const [portfolioInfoStore, setPortfolioInfoStore] = useContext(PortfolioInfoContext);

  const classes = homeStyles();

  useEffect(() => {
    firestoreDB.collection('skills').onSnapshot(snapshot => {
      setSkills(snapshot.docs.map(doc => doc.data()));
    });

    firestoreDB.collection('skills').onSnapshot(snapshot => {
      setSkills(snapshot.docs.map(doc => doc.data()));
    });

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
        <Grid item lg={8} sm={12}>
          <Grid item lg={12} sm={12} style={{marginBottom: 15}}>
            <Card>
              <CardHeader title={'🕴️ PROFILE'} />
              <Divider />
              <CardContent style={{ textAlign: 'justify' }}>
                {portfolioInfoStore.profile && portfolioInfoStore.profile.length > 0 && portfolioInfoStore.profile.map(_profile => {
                  return (
                    <React.Fragment>
                      <span>{_profile}</span>
                      <br />
                    </React.Fragment>
                  )
                })}
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={12} sm={12}>
            <Card>
              <CardHeader title={'🕴️ WORK EXPERIENCE'} />
              <Divider />
              <CardContent style={{ textAlign: 'justify' }}>
                {portfolioInfoStore.profile && portfolioInfoStore.profile.length > 0 && portfolioInfoStore.profile.map(_profile => {
                  return (
                    <React.Fragment>
                      <span>{_profile}</span>
                      <br />
                    </React.Fragment>
                  )
                })}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item lg={4} sm={12}>
          <Grid item>
            <Card>
              <CardHeader title={'🛠 SKILLS'} />
              <Divider />
              <CardContent style={{ textAlign: 'justify' }}>
                {portfolioInfoStore.skills_description}
              </CardContent>
              <Divider />
              <div style={{ marginLeft: 10, marginRight: 10 }}>
                {skills &&
                  skills.length > 0 &&
                  skills.map(skill => {
                    return (
                      <React.Fragment>
                        <p style={{ textAlign: 'center' }}>{skill.skill_category}</p>
                        <div className={classes.skillsSection}>
                          {skill.skills_array.map(_skill => {
                            return (
                              <Chip color="primary" label={_skill.skill_name} />
                            )
                          })}
                        </div>
                        <Divider />
                      </React.Fragment>
                    )
                  })
                }
              </div>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Home;