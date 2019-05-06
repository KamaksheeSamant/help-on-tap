
import { combineReducers } from "redux";
import { formReducer  as formData } from './modules/form.module';
// import { personalInfoFormReducer as personalInfoFormData} from './modules/personalInfoForm.module';
import {commonReducer as commonSettings} from './modules/common.module';

export default combineReducers({
    formData,
    commonSettings
});