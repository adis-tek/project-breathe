import { combineReducers } from 'redux';
import stateDataReducer from './stateDataReducer';
import stateDataHistoryReducer from './stateDataHistoryReducer';
import stateCodeInitialsReducer from './stateCodeInitialsReducer';
import stateURLReducer from './stateURLReducer';


const rootReducer = combineReducers({
    stateDataToday: stateDataReducer,
    stateHistory: stateDataHistoryReducer,
    stateInitials: stateCodeInitialsReducer,
    stateURL: stateURLReducer
});

export default rootReducer;