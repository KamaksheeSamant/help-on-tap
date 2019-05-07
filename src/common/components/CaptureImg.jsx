import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withUserAgent from '../components/WithUserAgent';
import withErrorBoundry from '../components/WithUserAgent';

const styles = theme => ({
  CaptureImg: {
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'column',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  buttonStyle: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
    width: '100%',
  },
  subtitle: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
  }
});

class CaptureImg extends Component {
  getBase64 = (file, callback) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    let result = null;
    reader.onload = function () {
      result = reader.result;
      callback(result);
    };
    reader.onerror = function (error) {
      console.error('Error: ', error);
    };
  }
  
  setImageData = (filesdata) => {
    this.props.handleChange(this.props.fileDateState,filesdata);
  }

  onSelect = event => {
    let selectedFileName = document.getElementById('raised-button-file');
    const files = selectedFileName.files;
    selectedFileName = files[0].name;
    this.props.handleChange(this.props.fileNameState,selectedFileName);
    this.getBase64(files[0],this.setImageData);
  }

  render() {
    // console.log("UA", this.props.userAgent);
    const { fileName, captureImgMsg } = this.props;
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography variant="caption" gutterBottom
          className={classes.subtitle}
        >
          {captureImgMsg}
        </Typography>
        <input
          accept="image/*"
          color="primary"
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
          onChange={this.onSelect}
        />
        <label htmlFor="raised-button-file">
          <Button
            variant="contained"
            color="primary"
            component="span"
            className={classes.buttonStyle}
          >
            Select
          </Button>
        </label>
        <Typography variant="caption" gutterBottom
          className={classes.subtitle}
        >
          {fileName}
        </Typography>
        {/* {<canvas id="canvas"></canvas>} */}
      </Fragment>
    );
  }
}
CaptureImg.propTypes = {
  userAgent: PropTypes.string.isRequired,
  captureImgMsg: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  fileName: PropTypes.string.isRequired,
  fileNameState: PropTypes.string.isRequired,
  fileDateState: PropTypes.string.isRequired,
}
export default compose(
  withStyles(styles),
  withErrorBoundry,
  withUserAgent
)(CaptureImg);
