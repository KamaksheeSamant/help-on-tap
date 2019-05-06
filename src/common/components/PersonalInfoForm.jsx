
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CaptureImg from '../components/CaptureImg';
import withErrorBoundry from '../components/WithErrorBoundry';

const styles = theme => ({
    formContainer: {
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
    nextButton: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2,
        width: '100%',
    }
});

class PersonalInfoForm extends React.Component {
    state = {
        DOB: "",
        firstName: "",
        lastName: "",
        isNextClicked: false,
        identityCardFileData: "",
        identityCardFileName: "",
    };

    handleCaptureImgData = (name, value) => {
        this.setState({ [name]: value });
    };

    handleChange = (name) => event => {
        this.setState({ [name]: event.target.value });
    };

    isPastDate = () => {
        return new Date() > new Date(this.state.appointmentDate);
    }

    isFormClean = () => {
        const falsyVals =
            Object.keys(this.state).filter((formElementKey) => (!this.state[formElementKey] || this.state[formElementKey] === ""));
        return falsyVals.length === 0;
    }

    onNextClick = () => {
        this.setState({ isNextClicked: true },
            () => {
                if (this.isFormClean()) {
                    this.props.setPersonalInfoFormData({ ...this.state });
                }
            });

    }
    requiredCheck = (value) => {
        return this.state.isNextClicked && (value === null || value === undefined || value === '');
    }
    render() {
        const { classes } = this.props;
        const {
            DOB,
            firstName,
            lastName,
            identityCardFileName
        } = this.state;
        return (
            <form className={classes.formContainer} noValidate autoComplete="off">
                <Typography variant="h5" gutterBottom>
                    Personal Information
                </Typography>
                <Typography variant="caption" gutterBottom>
                    *All fields are required
                </Typography>
                <TextField
                    error={this.requiredCheck(firstName)}
                    label="First Name"
                    onChange={this.handleChange('firstName')}
                    className={classes.textField}
                    margin="normal"
                    placeholder="First Name"
                />
                <TextField
                    error={this.requiredCheck(lastName)}
                    label="Last Name"
                    onChange={this.handleChange('lastName')}
                    className={classes.textField}
                    margin="normal"
                    placeholder="Last Name"
                />
                <TextField
                    error={this.requiredCheck(DOB) || this.isPastDate()}
                    label="Date of Birth"
                    type="date"
                    defaultValue={DOB}
                    onChange={this.handleChange('DOB')}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText="Please select past date"

                />
                <CaptureImg
                    handleChange={this.handleCaptureImgData}
                    fileName={identityCardFileName}
                    captureImgMsg={"Send us an ID: (Driver's License, Adhar Card, etc.) "}
                    fileNameState="identityCardFileName"
                    fileDateState="identityCardFileData" />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.nextButton}
                    onClick={this.onNextClick}>
                    Next
                </Button>
            </form>
        );
    }
}

PersonalInfoForm.propTypes = {
    classes: PropTypes.object.isRequired,
    setPersonalInfoFormData: PropTypes.func.isRequired,
};

export default compose(
    withErrorBoundry,
    withStyles(styles),
)(PersonalInfoForm);