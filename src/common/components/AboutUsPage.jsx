import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

function AboutUsPage(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      
      <Typography variant="h5" gutterBottom>
        About Our Company
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis teneturLorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
    </div>
  );
}

AboutUsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsPage);
