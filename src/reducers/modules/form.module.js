import { createActions, handleActions } from 'redux-actions';
export const formActions = createActions({
            SET_APPOINTMENT_DATA: data => data,
            SET_PERSONAL_DATA: data => data
});

export const formReducer = handleActions(
    {
        [formActions.setAppointmentData]: (state, { payload }) => ({
            ...state,
            "appointmentData":payload
        }),
        [formActions.setPersonalData]: (state, { payload }) => ({
            ...state,
            "personalData":payload
        }),
    },
    {},
);

