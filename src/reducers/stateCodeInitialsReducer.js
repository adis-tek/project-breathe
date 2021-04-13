const initState = { codeInitialsTest: [] };


const stateCodeInitialsReducer = (state=initState, action) => {
    switch(action.type){
        case "GET_CODE_INITIALS":
            return {...state,
                codeInitialsTest: action.payload
        };
        default:
            return {...state};
    };
};

export default stateCodeInitialsReducer;