import axios from 'axios';
import { state_URL } from '../api';

//Action creator

export const loadStateData = () => async (dispatch) => {
    //Fetch axios
    const stateData = await axios.get(state_URL())
    dispatch({
        type: "FETCH_STATE_DATA",
        payload: {
            //specify the exact data so that you can achieve array form
            totalCases: stateData.data.metricsTimeseries
        },

    });
};

{/* 

            totalCases: stateData.data.actuals.cases,
            totalDeaths: stateData.data.actuals.deaths,
            newCases: stateData.data.actuals.newCases,
            newDeaths: stateData.data.actuals.newDeaths,
            infectionRate: stateData.data.metrics.infectionRate,
            icuCapacityRatio: stateData.data.metrics.icuCapacityRatio,
            vaccinationsInitiatedRatio: stateData.data.metrics.vaccinationsInitiatedRatio,
            vaccinationsCompletedRatio: stateData.data.metrics.vaccinationsCompletedRatio,

*/}