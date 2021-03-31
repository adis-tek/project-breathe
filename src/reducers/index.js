import { combineReducers } from 'redux';
import stateDataReducer from './stateDataReducer';
import stateDataHistoryReducer from './stateDataHistoryReducer';


const rootReducer = combineReducers({
    stateDataToday: stateDataReducer,
    stateHistory: stateDataHistoryReducer
});

export default rootReducer;