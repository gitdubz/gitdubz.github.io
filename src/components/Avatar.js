import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ProfilePic from '../assets/images/dw.png';

const styles = theme => ({
  img: {
    borderRadius: '100%',
    boxShadow: '1px 0px 4px #000',
    maxWidth: '100%',
    marginBottom: theme.spacing.unit * 2
  }
});

const Avatar = ({ classes }) => (
  <img
    title="De Wet van der Merwe"
    alt="De Wet van der Merwe"
    className={[classes.rounded, classes.img].join(' ')}
    src={ProfilePic}
  />
);

export default withStyles(styles)(Avatar);
