import { createActions, handleActions } from 'redux-actions';
export const commonActions = createActions({
    SET_CURRENT_FORM: data => data
});

export const commonReducer = handleActions(
    {
        [commonActions.setCurrentForm]: (state, { payload }) => ({
            ...state,
            "currentForm": payload
        }),
    },
    { "currentForm": "AppointmentForm" },
);

