import moment from 'moment';
import lottie from 'lottie-web';
import { Rating } from '@material-ui/lab';
import React, { useEffect, useContext } from 'react';
import { Grid, Card, Chip, CardContent, CardHeader, Divider } from '@material-ui/core';

import homeStyles from './styles';
import { firestoreDB } from '../../utils/FirebaseConfig';
import { SkillsContext } from '../../context/SkillsContext';
import { PortfolioInfoContext } from '../../context/PortfolioInfoContext';
import { WorkExperienceContext } from '../../context/WorkExperienceContext';
import { StarBorderIcon } from '../../utils/MaterialIcons';

const Home = (props) => {
  const [skills, setSkills] = useContext(SkillsContext);
  const [workExperience, setWorkExperience] = useContext(WorkExperienceContext);
  const [portfolioInfoStore, setPortfolioInfoStore] = useContext(PortfolioInfoContext);
  const classes = homeStyles();

  useEffect(() => {
    firestoreDB.collection('skills').onSnapshot(snapshot => {
      setSkills(snapshot.docs.map(doc => doc.data()));
    });

    firestoreDB.collection('work_experience').onSnapshot(snapshot => {
      let workExperience = snapshot.docs.reverse();
      setWorkExperience(workExperience.map(doc => doc.data()));
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
          <Grid item lg={12} sm={12} style={{ marginBottom: 15 }}>
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
              <CardHeader title={'👨‍💻 WORK EXPERIENCE'} />
              <Divider />
              <CardContent style={{ textAlign: 'justify' }}>
                {workExperience.length > 0 && workExperience.reverse().map((_workExperience, index) => {
                  return (
                    <React.Fragment>
                      <div>
                        <strong>
                          {_workExperience.designation} - &nbsp;
                          <a style={{ color: 'inherit', marginRight: 5 }}
                            target="_blank"
                            href={_workExperience.website}>
                            {_workExperience.company_name}
                          </a>
                          ({moment(_workExperience.start_date.toDate()).format('MMM YYYY')} - {_workExperience.end_date ? moment(_workExperience.end_date.toDate()).format('MMM YYYY') : "Current"})
                        </strong>
                        <div dangerouslySetInnerHTML={{ __html: _workExperience.job_description }} />
                      </div>
                      {index + 1 !== workExperience.length && <Divider style={{ marginBottom: 10 }} />}
                    </React.Fragment>
                  )
                })}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item lg={4} sm={12}>
          <Grid item style={{ marginBottom: 15 }}>
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
                  skills.map((skill, index) => {
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
                        {index + 1 !== skill.length && <Divider />}
                      </React.Fragment>
                    )
                  })
                }
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader title={'🌏 LANGUAGES'} />
              <Divider />
              <CardContent>
                <div style={{ display: 'grid' }}>
                  <span><strong>English:</strong> Full Professional Fluency</span>
                  <Rating
                    name="customized-empty"
                    defaultValue={5}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </div>
                <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                <div style={{ display: 'grid' }}>
                  <span><strong>Hindi:</strong> Native Speaker</span>
                  <Rating
                    name="customized-empty"
                    defaultValue={5}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Home;