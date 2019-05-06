
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { locations, examsData } from '../helper/constants';
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

class AppointmentForm extends React.Component {
    state = {
        appointmentDate: "",
        note: "",
        location: "",
        exams: "",
        fromTime: "",
        toTime: "",
        isNextClicked: false,
        appointmentFileData: "",
        appointmentFileName: "",
    };

    handleCaptureImgData = (name, value)  => {
        this.setState({ [name]: value });
    };

    handleChange = (name) => event => {
        this.setState({ [name]: event.target.value});
    };

    isFurureDate = () => {
        return new Date() >= new Date(this.state.appointmentDate);
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
                    this.props.setAppointmentFormData({ ...this.state });
                }
            });

    }
    requiredCheck = (value) => {
        return this.state.isNextClicked && (value === null || value === undefined || value === '');
    }
    render() {
        const { classes } = this.props;
        const {
            note,
            location,
            appointmentDate,
            exams,
            fromTime,
            toTime,
            appointmentFileName
        } = this.state;
        return (
            <form className={classes.formContainer} noValidate autoComplete="off">
                <Typography variant="h5" gutterBottom>
                    Request an appointment
                </Typography>
                <Typography variant="caption" gutterBottom>
                    *All fields are required
                </Typography>
                <TextField
                    error={this.requiredCheck(location)}
                    select
                    label="Clinic location"
                    className={classes.textField}
                    value={location}
                    onChange={this.handleChange('location')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your location"
                    margin="normal"
                >
                    {locations.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    error={this.requiredCheck(exams)}
                    select
                    label="Exams"
                    className={classes.textField}
                    value={exams}
                    onChange={this.handleChange('exams')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your medication course"
                    margin="normal"
                >
                    {examsData.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    error={this.requiredCheck(appointmentDate) || this.isFurureDate()}
                    label="Date Requested"
                    type="date"
                    defaultValue={appointmentDate}
                    onChange={this.handleChange('appointmentDate')}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText="Please select today or future date"

                />
                <TextField
                    error={this.requiredCheck(fromTime)}
                    label="Time Request"
                    type="time"
                    defaultValue={fromTime}
                    onChange={this.handleChange('fromTime')}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    helperText="From"
                />
                <TextField
                    error={this.requiredCheck(toTime)}
                    label="Time Request"
                    type="time"
                    defaultValue={toTime}
                    onChange={this.handleChange('toTime')}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    helperText="To"
                />
                <TextField
                    error={this.requiredCheck(note)}
                    label="Notes"
                    note
                    rows="4"
                    onChange={this.handleChange('note')}
                    className={classes.textField}
                    margin="normal"
                    placeholder="Add your note..."
                />
                <CaptureImg 
                    handleChange={this.handleCaptureImgData}
                    fileName={appointmentFileName} 
                    captureImgMsg = "Have a doctor's order ? Send us pics:"
                    fileNameState="appointmentFileName"
                    fileDateState="appointmentFileData"/>
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

AppointmentForm.propTypes = {
    classes: PropTypes.object.isRequired,
    setAppointmentFormData: PropTypes.func.isRequired,
};

export default compose(
    withErrorBoundry,
    withStyles(styles),
)(AppointmentForm);