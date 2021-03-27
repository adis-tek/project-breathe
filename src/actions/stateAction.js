import axios from 'axios';
import { state_URL } from '../api';

//Action creator

export const loadStateData = () => async (dispatch) => {
    //Fetch axios
    const stateData = await axios.get(state_URL())
    dispatch({
        type: "FETCH_STATE_DATA",
        payload: {
            stateData: stateData,
        },

    });
};