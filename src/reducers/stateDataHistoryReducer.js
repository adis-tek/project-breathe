const initState = { stateDataHistory: [] };


const stateDataHistoryReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_STATE_DATA_HISTORY":
            return {...state,
            stateDataHistory: action.payload.timeSeries
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

export default stateDataHistoryReducer;