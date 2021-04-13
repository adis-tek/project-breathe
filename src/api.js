//API key = a9eb28cd3ef74d2baf520bb9c6607ceb
const auth = "a9eb28cd3ef74d2baf520bb9c6607ceb";
export const state_initials = JSON.parse(localStorage.getItem('name'));
const state_code = `${state_initials}`;
// Base URL
const base_url = `https://api.covidactnow.org/v2`
// State data
const state = `/state/${state_code}.timeseries.json?apiKey=${auth}`;
// STATE DATA
export const state_URL = () => `${base_url}${state}`;

{/* dispatch({
    type: "GET_STATE_URL",
    payload: state_URL
  });

*/}