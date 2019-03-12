import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

//
const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 8,
    color: '#666',
    textAlign: 'justify',
    '& hr': {
      borderColor: '#999',
      margin: '2.5em 0'
    },
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      textAlign: 'left'
    }
  },
  noMargin: {
    marginBottom: 0
  },
  heading: {
    position: 'relative',
    textTransform: 'uppercase',
    zIndex: 1,
    overflow: 'hidden',
    textAlign: 'left',
    letterSpacing: 3,
    fontWeight: 'bold',
    paddingLeft: 15,
    '&:after': {
      position: 'absolute',
      top: '51%',
      overflow: 'hidden',
      width: '100%',
      marginLeft: theme.spacing.unit,
      height: 1,
      content: "'\\a0'",
      backgroundColor: '#333'
    }
  },
  contentContainer: {
    display: 'flex',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit * 2}px ${theme.spacing.unit * 2}px `
  },
  icon: {
    borderLeft: '1px solid #999',
    borderTop: '1px solid #999',
    borderBottom: '1px solid #999',
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      color: '#fff',
      marginLeft: -25,
      border: '5px solid #fff',
      zIndex: 2,
      backgroundColor: '#aaa',
      borderRadius: '100%',
      padding: theme.spacing.unit,
      width: 50,
      height: 50
    }
  },
  content: {
    padding: theme.spacing.unit * 5,
    '& h3': {
      textDecoration: 'underline',
      marginBottom: 0
    },
    '& h4': {
      marginBottom: -(theme.spacing.unit * 2),
      marginTop: theme.spacing.unit * 4,
      fontSize: 16
    },
    '& h5': {
      marginTop: 5,
      fontWeight: 'normal'
    },
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      padding: theme.spacing.unit
    }
  }
});

class InfoBlock extends Component {
  render() {
    const { classes, heading, icon, children, noMargin } = this.props;
    return (
      <section
        className={classnames(classes.root, noMargin && classes.noMargin)}
      >
        <Typography variant="h6" className={classes.heading}>
          {heading}
        </Typography>

        <div className={classes.contentContainer}>
          <div className={classes.icon}>{icon}</div>
          <div className={classes.content}>{children}</div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(InfoBlock);
