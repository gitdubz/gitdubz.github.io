import React from 'react';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit
  }
});

const chips = [
  'Angular',
  'React',
  'JavaScript',
  'Node.js',
  'Firebase',
  'Blockchain',
  'Solidity',
  'MySQL',
  'Webpack',
  'Vue',
  'Redux',
  'BackboneJS',
  'MarionetteJS',
  'Styled Components',
  'Lodash',
  'SQL',
  'ChimpJS',
  'Jasmin',
  'Gherkin',
  'Maven',
  'Polyglot',
  'HTML',
  'CSS',
  'SASS',
  'Bootstrap',
  'Foundation',
  'Cloud Firestore',
  'React-intl',
  'Jest',
  'Glamorous',
  'Emotion',
  'Cypress',
  'Stripe',
  'Google App Engine',
  'Google Keychain Manager',
  'PHP',
  'Wordpress',
  'Payfast',
  'Apache',
  'Ajax',
  'Mongo',
  'Mongoose',
  'GraphQL',
  'Gatsby',
  'HTTPS'
].sort();

const TechChips = ({ classes }) =>
  chips.map(item => <Chip className={classes.chip} key={item} label={item} />);

export default withStyles(styles)(TechChips);
