import React, { Component } from 'react';
import { ThemeProvider } from './containers/ThemeProvider';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
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
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      height: 'auto'
    }
  },
  content: {
    flexGrow: 1,
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    height: '100vh',
    overflow: 'auto',
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
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
                <p>
                  I have never worked a day in my life, I am fortunate enough to
                  get paid for doing my hobby. I love people, code, learning and
                  I love to build awesome stuff with others that add real value
                  to those using it. I see myself as an entrepreneurial
                  developer who loves to innovate and create new things and see
                  them through from inception to realisation.
                </p>
                <p>
                  I am a husband and father who values family time. I believe
                  that a healthy home allows for a healthy employee. In my spare
                  time I try to keep up with the latest progressions in my field
                  by doing online courses through Udemy & Udacity. I sometimes
                  attend meetups if life allows for it, and read as much Medium,
                  Hackernoon & Harvard Business Review articles as possible.
                </p>
                <p>
                  From a tech perspective I am digging into web3 and blockchain,
                  having completed an amazing course on Udemy recently -
                  "Ethereum and Solidity the complete developers guide" by
                  Stephen Grider. My next course will be one on Machine Learning
                  - can't wait!
                </p>
                <p>
                  From a professional and personal perspective I am learning
                  more and more about the "leanstack" - how to continuously
                  innovate.
                </p>
              </InfoBlock>

              <InfoBlock heading="Education" icon={<SchoolIcon />}>
                <p>
                  (UNISA) University of South Africa
                  <br />
                  BCom Information Technology, 2011 - 2014
                </p>
              </InfoBlock>

              <InfoBlock icon={<CodeIcon />} heading="Technologies">
                <TechChips />
              </InfoBlock>

              <InfoBlock heading="Experience" icon={<TrophyIcon size={21} />}>
                <h3 className="underline">Summary</h3>
                <p>Backend Engineer ... 10-15 years</p>
                <p>JS Frontend Engineer ... 6-10 years</p>
                <p>Engineering Team Lead ... 6-10 years</p>
                <p>Engineering Manager ... 6-10 years</p>
                <p>Product Owner ... 4-6 years</p>
                <br />
                <hr className="dark" />
                <br />
                <h3 className="underline">
                  Engineering Team Lead&nbsp;at&nbsp;Responsive Studio
                </h3>
                February 2014&nbsp;-&nbsp;present
                <p>
                  <strong>TLDR;</strong>&nbsp;I&#39;m a Full-stack engineer,
                  Team lead, Scrum master and Product owner working in a
                  cross-functional, semi-remote team. Utilising an Agile
                  approach to developing software, testing it using unit &amp;
                  end-to-end testing in order to respond to ever changing
                  requirements &amp; loving it!
                </p>
                <p>
                  <br />
                  <br />
                  <br />
                  <strong>Flamelink</strong>
                  <br />I have always had the urge to create a realtime headless
                  CMS but could never really find a scalable solution for it
                  until Google released Firebase. I founded and served as the
                  Initial Tech-lead &amp; Product Owner. (Currently Project
                  Manager, Scrum Master, Product Owner and Senior Developer) in
                  my spare time, which caught the attention of my current
                  employers who now actively fund the development of Flamelink -
                  a firebase CMS. The project has been going for 4 years but has
                  been in production for 2. We currently have 7500+ users
                  covering 80% of countries world wide, growing on a month to
                  month basis whom of most are developers &amp; agencies.
                </p>
                <p>
                  <strong>
                    <em>Technologies used</em>
                  </strong>
                  <br />
                  Firebase, Cloud Firestore, React, Redux, React-intl, Jest,
                  Glamorous, Emotion, Styled Components, Node, Webpack, Cypress,
                  Stripe, Google App Engine, Google Keychain Manager
                </p>
                <p>
                  <br />
                  <br />
                  <br />
                  <strong>myChep</strong>
                  <br />
                  Senior Front-end Engineer and Feature lead. Surely one of the
                  most complex applications infrastructure, code, and
                  integration wise currently in production with thousands of
                  business rules stretching over 65 countries catering for
                  hundreds of transactions at a time from any given user in
                  nearly real time.
                </p>
                <p>
                  myChep currently supports 21 languages in 65 countries, with
                  16.5 M + operations per year, and more than 50K end users
                </p>
                <p>
                  <strong>
                    <em>Technologies used</em>
                  </strong>
                  <br />
                  BackboneJS, MarionetteJS, React, Styled Components, Lodash,
                  SQL, ChimpJS, Jasmin, Gherkin, Webpack, Maven, Polyglot,
                  HTML5, CSS3, SASS, Bootstrap
                </p>
                <p>
                  <br />
                  <br />
                  <br />
                  <strong>Old Mutual - More Than Yourself</strong>
                  <br />
                  Worked as a Full-stack PHP engineer orchestrating a secure
                  fundraising/donation platform using, Wordpress and a custom
                  PHP API that was fully responsive and mobile friendly. I loved
                  this project due to the difference the rewrite made. Donations
                  that totalled to R100K over 3 years, but then rocketed to over
                  a R1 Million in the next 12 months after the release of the
                  new platform.
                </p>
                <p>
                  <strong>
                    <em>Technologies used</em>
                  </strong>
                  <br />
                  PHP, Wordpress, Payfast, HTML5, CSS3, SASS, Bootstrap
                </p>
                <br />
                <hr className="dark" />
                <br />
                <h3 className="underline">
                  Full Stack Engineer&nbsp;at&nbsp;Focus Online Travel
                </h3>
                January 2014&nbsp;-&nbsp;February 2015
                <p>
                  During my time at Focus Online Travel I was the sole
                  developer, under great leadership. We aimed to deliver high
                  quality, mobile first websites for local &amp; international
                  clients, with a focus on SEO, allowing clients to manage
                  content themselves along with quick turnarounds for additions
                  and changes to sites.
                </p>
                <br />
                <br />
                <br />
                <strong>In-house CMS</strong>
                <br />
                <p>Built a flexible in-house CMS with the following features</p>
                <ul>
                  <li>flexible content types &amp; form builder</li>
                  <li>
                    media uploads with resizing, and image manipulation
                    capabilities
                  </li>
                  <li>user / permission management</li>
                  <li>
                    drag &amp; drop menu builder (coupled with pretty urls)
                  </li>
                  <li>site details</li>
                  <li>custom dashboards</li>
                  <li>scripts &amp; customisation editor</li>
                </ul>
                <p>
                  <br />
                  <br />
                  <br />
                  <strong>Boilerplate/Template</strong>
                  <br />
                  Developed a template that was theme-able via the CMS with
                  security &amp; SEO as the main focus. The template was
                  flexible enough to accommodate any of the designers creative
                  ideas.
                </p>
                <p>
                  <strong>Projects</strong>
                  <br />
                  Ilala lodge, Chiawa camp, le Franschhoek, The Turbine, Giraffe
                  house, Vineyard Hotel and Spa, Africa and You and may more.
                </p>
                <p>
                  <strong>
                    <em>Technologies used</em>
                  </strong>
                  <br />
                  PHP, MySQL, CSS, HTML, Bootstrap, jQuery, Apache, Ajax
                </p>
                <br />
                <hr className="dark" />
                <br />
                <h3 className="underline">
                  Founder &amp; CTO&nbsp;at&nbsp;VigoCMS
                </h3>
                May 2010&nbsp;-&nbsp;September 2012
                <p>
                  VigoCMS was birthed out of an internal product created at
                  NuSoft. We quickly realised the need for low cost, great
                  looking, no development needed websites - to get small
                  businesses off the ground in an affordable manor. During my
                  time at VigoCMS I was responsible for architecting the
                  platform in such a way that we could allow our customers to
                  easily choose and customise their online presence. Not only
                  that but also to allow for plugins and integration with
                  external services.
                </p>
                <p>
                  <br />
                  <strong>Achievements</strong>
                  <br />
                  2014: VigoCMS went on to win the MTN app of the year award
                  2015: VigoCMS partnered with Webnic, one of the top 50 Asian
                  domain registrars to become the default site builder for all
                  of their clients.
                </p>
                <p>
                  <strong>
                    <em>Technologies used</em>
                  </strong>
                  <br />
                  PHP, MySQL, CSS, HTML5, jQuery, Ajax, Asure
                </p>
                <br />
                <hr className="dark" />
                <br />
                <h3 className="underline">
                  Founder &amp; CTO&nbsp;at&nbsp;Nusoft
                </h3>
                January 2008&nbsp;-&nbsp;September 2012
                <p>
                  One of my greatest learning experiences was to start NuSoft.
                  The company specialised in establishing brands and driving
                  online business. We targeted niche startups helping them on
                  their journey to express themselves through their corporate
                  identity, online presence, and custom online platforms. As CTO
                  I was responsible for the direction and strategy when it came
                  to our tech-stack, resources and ops ensuring we were
                  utilising the technologies and services in a profitable,
                  sustainable and secure manner.
                </p>
                <p>
                  With NuSoft being a lean startup without capital injection,
                  part of my duties was to lead a team of developers. Two of the
                  most interesting projects we did were:
                </p>
                <p>
                  <br />
                  <br />
                  <br />
                  <strong>RSP (Realtime Security Platform)</strong>
                  <br />
                  The platform had to cater for employee management, roles and
                  permissions, time tracking, document storage, in-app
                  documentation viewing, realtime notifications, realtime chats,
                  realtime political climate alerts, event calendars and
                  emailing to name just a few - all within an encrypted
                  environment.
                </p>
                <p>
                  The purpose for the platform was to enable security teams to
                  safely host and escort high-profile United Nations officials
                  in any country, sharing realtime information about the
                  immediate environment.
                </p>
                <p>
                  <strong>
                    <em>Technologies used</em>
                  </strong>
                  <br />
                  PHP, MySQL, CSS, HTML5, jQuery, Ajax, HTTPS
                </p>
                <p>
                  <br />
                  <br />
                  <br />
                  <strong>NuSoft CMS (now VigoCMS)</strong>
                  <br />
                  With every client having their own needs, we knew we had to
                  develop a base platform that we could extend for all new
                  clients in order to serve then in a timely fashion. So we
                  built NuSoft CMS. The CMS was easy to configure, deploy and
                  customise, allowing us to focus our efforts on what our
                  clients needed as opposed to what we needed to do, before we
                  could meet their needs. The internal product later became the
                  company now known as VigoCMS.
                </p>
                <p>
                  <strong>
                    <em>Technologies used</em>
                  </strong>
                  <br />
                  PHP, MySQL, CSS, HTML5, jQuery, Ajax
                </p>
              </InfoBlock>
            </article>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
