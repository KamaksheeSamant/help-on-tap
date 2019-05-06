import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppointmentForm from '../common/components/AppointmentForm';
import PersonalInfoForm from '../common/components/PersonalInfoForm';
import FormPreviewPage from '../common/components/FormPreviewPage';
import { connect } from 'react-redux';
import { formActions } from '../reducers/modules/form.module';
import { commonActions } from '../reducers/modules/common.module';

const FormContainer = ({ setAppointmentFormData, currentForm, setPersonalInfoFormData, formData }) => (
    <Fragment>
        {currentForm === "AppointmentForm" &&
            <AppointmentForm
                setAppointmentFormData={setAppointmentFormData} />}
        {currentForm === "PersonalInfoForm" &&
            <PersonalInfoForm 
            setPersonalInfoFormData={setPersonalInfoFormData} />}
        {currentForm === "formPreview" &&
            <FormPreviewPage formData={formData}/>}
    </Fragment>
);

FormContainer.propTypes = {
    setAppointmentFormData: PropTypes.func.isRequired,
    setPersonalInfoFormData: PropTypes.func.isRequired,
    currentForm: PropTypes.string.isRequired,
};

export default connect(
    (state) => ({
        currentForm: state.commonSettings.currentForm,
        formData: {...state.formData.appointmentData,...state.formData.personalData}
    }),
    dispatch => ({
        setAppointmentFormData: (data) => {
            dispatch(formActions.setAppointmentData(data))
            dispatch(commonActions.setCurrentForm("PersonalInfoForm"))
        },
        setPersonalInfoFormData: (data) => {
            dispatch(formActions.setPersonalData(data))
            dispatch(commonActions.setCurrentForm("formPreview"))
        },
    })
)(FormContainer);
