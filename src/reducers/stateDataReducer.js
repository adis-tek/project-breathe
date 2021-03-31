const initState = { stateData: [] };


const stateDataReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_STATE_DATA":
            return {...state,
            stateData: action.payload.totalCases
        };
        default:
            return {...state};
    };
};

//ACTION CREATOR
//const fetchGames = () => {
    //return{
        //type: "FETCH_GAMES",
    //};
//};

export default stateDataReducer;