const initState = { stateDataHistoryActuals: [], stateDataHistoryMetrics: [] };


const stateDataHistoryReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_STATE_DATA_HISTORY":
            return {...state,
            stateDataHistoryActuals: action.payload.historyActuals,
            stateDataHistoryMetrics: action.payload.historyMetrics
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