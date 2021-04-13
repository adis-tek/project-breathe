const initState = { stateURL: [] };


const stateURLReducer = (state=initState, action) => {
    switch(action.type){
        case "GET_STATE_URL":
            return {...state,
                stateURL: action.payload
        };
        default:
            return {...state};
    };
};

export default stateURLReducer;