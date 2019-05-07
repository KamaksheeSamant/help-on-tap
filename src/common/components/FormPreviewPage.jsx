import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ImagePainter from './ImagePainter';

const styles = {
    root: {
        width: '100%',
        maxWidth: 500,
    },
};
const dataFormater = (data) => {
    return Object.keys(data).map((formDataKey) => {
        if (formDataKey.includes("FileData"))
            return <ImagePainter 
            ImageDataURI={data[formDataKey]} 
            ImageId={formDataKey}/>;
        else
            return (
                <Typography variant="subtitle1" gutterBottom>
                    {`${formDataKey} : ${data[formDataKey]}`}
                </Typography>);
    });
}
function FormPreviewPage(props) {
    const { classes, formData } = props;

    return (
        <div className={classes.root}>

            <Typography variant="h5" gutterBottom>
                Form Preview
            </Typography>
            {dataFormater(formData)}

        </div>
    );
}

FormPreviewPage.propTypes = {
    classes: PropTypes.object.isRequired,
    formData: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormPreviewPage);
