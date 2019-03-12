import React from 'react';
import { Typography } from '@material-ui/core';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationIcon from '@material-ui/icons/LocationCity';
import {
  FaTwitter as TwitterIcon,
  FaLinkedin as LinkedInIcon,
  FaGithub as GithubIcon
} from 'react-icons/fa';

const styles = theme => ({
  root: {
    '& h3, & h6': {
      color: '#fff',
      lineHeight: 2
    }
  },
  icon: {
    color: '#fff',
    fontSize: 16,
    marginRight: theme.spacing.unit,
    verticalAlign: 'middle',
    transition: 'all .2s ease-in-out'
  },
  socialIcon: {
    '&:hover': {
      transform: 'scale(1.2)'
    }
  }
});

const PersonalDetails = ({
  classes,
  fullName,
  email,
  linkedIn,
  twitter,
  github,
  contactNumber,
  location
}) => (
  <div className={classes.root}>
    <Typography variant="subheading">{fullName}</Typography>
    <Typography variant="subtitle2">
      <EmailIcon className={classes.icon} />
      <a href={`mailto:${email}`}>{email}</a>
    </Typography>
    <Typography variant="subtitle2">
      <PhoneIcon className={classes.icon} />
      <a href={`tel:${contactNumber}`}>{contactNumber}</a>
    </Typography>
    <Typography variant="subtitle2">
      <LocationIcon className={classes.icon} />
      {location}
    </Typography>
    <hr />
    <a
      href={linkedIn.url}
      title={linkedIn.title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon className={classNames(classes.icon, classes.socialIcon)} />
    </a>
    <a
      href={twitter.url}
      title={twitter.title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterIcon className={classNames(classes.icon, classes.socialIcon)} />
    </a>
    <a
      href={github.url}
      title={github.title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon className={classNames(classes.icon, classes.socialIcon)} />
    </a>
  </div>
);

export default withStyles(styles)(PersonalDetails);
