import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        margin: 20,
    }
});

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
const examsData = [
    {
        value: 'EXAM 1',
        label: 'EXAM 1',
    },
    {
        value: 'EXAM 2',
        label: 'EXAM 2',
    },
    {
        value: 'EXAM 3',
        label: 'EXAM 3',
    },
    {
        value: 'EXAM 4',
        label: 'EXAM 4',
    },
];

class FormContainer extends React.Component {
    state = {
        date:'',
        note: '',
        location: '',
        exams: '',
        fromTime: '',
        toTime: '',
        isNextClicked: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    onNextClick = () =>{
        this.setState({isNextClicked:true});
    }
    requiredCheck =(value) =>{
        return this.state.isNextClicked && (value === null || value === undefined ||  value === '');
    }
    render() {
        const { classes } = this.props;
        const {
            note,
            location,
            date,
            exams,
            fromTime,
            toTime,
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
                    error ={this.requiredCheck(location)}
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
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    error ={this.requiredCheck(exams)}
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
                    error ={this.requiredCheck(date)}                    
                    label="Date Requested"
                    type="date"
                    defaultValue={date}
                    onChange={this.handleChange('date')}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    error ={this.requiredCheck(fromTime)}  
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
                    error ={this.requiredCheck(toTime)}                  
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
                    error ={this.requiredCheck(note)}                  
                    label="Notes"
                    note
                    rows="4"
                    onChange={this.handleChange('note')}
                    className={classes.textField}
                    margin="normal"
                    placeholder="Add your note..."
                />
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

FormContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormContainer);
