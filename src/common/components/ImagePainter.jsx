import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


class ImagePainter extends Component {
  componentDidMount() {
    const { ImageId, ImageDataURI } = this.props;
    var myCanvas = document.getElementById(ImageId);
    var ctx = myCanvas.getContext('2d');
    var img = new Image();
    img.src = ImageDataURI;
    img.onload = function () {
      ctx.width = img.width;
      ctx.height = img.height;
      ctx.drawImage(img, 0, 0, ctx.width, ctx.height); // Or at whatever offset you like
    };
  }

  render() {
    return (
      <Fragment>
        <Typography variant="subtitle1" gutterBottom>
          {`${this.props.ImageId} :`}
        </Typography>
        {<canvas id={this.props.ImageId}></canvas>}
      </Fragment>
    );
  }
}
ImagePainter.propTypes = {
  ImageDataURI: PropTypes.string.isRequired,
  ImageId: PropTypes.string.isRequired,
}
export default ImagePainter;
