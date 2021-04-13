import axios from 'axios';
import { state_URL } from '../api';


export const loadCodeInitials = () => async (dispatch) => {
    const codeTest = "AL";
    dispatch({
        type: "GET_CODE_INITIALS",
        payload: {
            //specify the exact data so that you can achieve array form
            codeInitialsTest: codeTest
        },

    });
};