import axios from 'axios';
import { state_URL } from '../api';

//Action creator

export const loadStateDataHistory = () => async (dispatch) => {
    //Fetch axios
    const stateDataHistory = await axios.get(state_URL())
    dispatch({
        type: "FETCH_STATE_DATA_HISTORY",
        payload: {
            // TIMESERIES (HISTORY DATA)
            timeSeries: stateDataHistory.data.actualsTimeseries
        },

    });
};

