const initState = {
    stateData: []
}

const stateDataReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_STATE_DATA":
            return {...state, stateData: action.payload.stateData};
        default:
            return {...state};
    };
};

export default stateDataReducer;