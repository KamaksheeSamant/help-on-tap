// configuring redux store

import { createStore } from "redux";
import reducer from "../reducers";
import {initState} from '../common/const/commonConst';


export default function configureStore() {

  const store = createStore(reducer,initState);
  return store;
}