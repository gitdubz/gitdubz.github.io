import React, { Component } from 'react';
import { ThemeProvider } from './containers/ThemeProvider';
import Markdown from 'markdown-to-jsx';
import raw from 'raw.macro';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Avatar from './components/Avatar';
import PersonalDetails from './components/PersonalDetails';
import TechChips from './components/TechChips';
import InfoBlock from './components/InfoBlock';
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import CodeIcon from '@material-ui/icons/Code';
import { FaTrophy as TrophyIcon } from 'react-icons/fa';
import './App.css';

const profileCopy = raw('./copy/profile.md');
const educationCopy = raw('./copy/education.md');
const experienceCopy = raw('./copy/experience.md');

const styles = theme => ({
  sidebar: {
    background: '#333',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
    alignItems: 'center',
    '& img': {
      marginRight: 16
    },
    [`@media (max-width: ${theme.breakpoints.values.md}px), @media print`]: {
      flexDirection: 'row',
      justifyContent: 'center',
      height: 'auto'
    },
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: 'column',
      height: 'auto'
    }
  },
  content: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    overflow: 'auto',
    height: '100vh',
    [`@media (max-width: ${theme.breakpoints.values.md}px),  @media print`]: {
      height: 'auto'
    },
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit *
        3}px ${theme.spacing.unit * 2}px`
    }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider>
        <Grid container>
          <Grid item xs={12} md={3} lg={2}>
            <aside className={classes.sidebar}>
              <Avatar />
              <PersonalDetails
                fullName="De Wet van der Merwe"
                email="dewet@707.co.za"
                contactNumber="(+27) 84 575 5136"
                linkedIn={{
                  url:
                    'https://www.linkedin.com/in/de-wet-van-der-merwe-b25686147/',
                  title: 'LinkedIn Profile'
                }}
                twitter={{
                  url: 'https://twitter.com/DeWetvanderMerw',
                  title: '@DeWetvanderMerw'
                }}
                github={{
                  url: 'https://github.com/gitdubz',
                  title: '@gitdubz'
                }}
                location="Cape Town, ZA"
              />
            </aside>
          </Grid>
          <Grid item xs={12} md={9} lg={10}>
            <article className={classes.content}>
              <InfoBlock heading="Personal" icon={<PersonIcon />}>
                <Markdown>{profileCopy}</Markdown>
              </InfoBlock>

              <InfoBlock heading="Education" icon={<SchoolIcon />}>
                <Markdown>{educationCopy}</Markdown>
              </InfoBlock>

              <div className="pageBreak" />

              <InfoBlock icon={<CodeIcon />} heading="Technologies">
                <TechChips />
              </InfoBlock>

              <InfoBlock
                heading="Experience"
                icon={<TrophyIcon size={21} />}
                noMargin
              >
                <Markdown>{experienceCopy}</Markdown>
              </InfoBlock>
            </article>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
