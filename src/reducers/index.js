import { combineReducers } from 'redux';
import stateDataReducer from './stateDataReducer';


const rootReducer = combineReducers({
    states: stateDataReducer,
});

export default rootReducer;