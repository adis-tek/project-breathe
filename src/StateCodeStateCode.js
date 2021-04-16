import React, { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage';
import { Grid, Container, Paper, Typography, Card, CardContent, MenuItem, Menu, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {   Formik, Field, Form, FieldAttributes, FieldArray } from 'formik';
import { useDispatch, useSelector} from 'react-redux';
import { loadCodeInitials } from './actions/codeInitialAction';
import { loadStateData } from './actions/stateAction';
import { loadStateDataHistory } from './actions/stateDataHistoryAction';
import { connect } from 'react-redux';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({

}));

function StateCodeStateCode() {
    const dispatch = useDispatch();
    const [state, setState] = useLocalStorage('name', '');
    const aaa = 12;

    useEffect(() => {
        dispatch(loadCodeInitials());
      }, [dispatch]);
    
    const { codeInitialsTest } = useSelector(
        (state) => state.stateInitials //IN REDUX THE DEVTOOL THE STATE I WANT IS CALLED 'STATES'
    );

    const onStateChange = async (event) => {
    var code = event.target.value;
    console.log(JSON.stringify({code}));
    console.log(Object.values(code));
    var a = Object.values(code)
    console.log(a);
    console.log(a[0] + a[1])
    var b = a[0] + a[1];
    console.log(b);
    console.log('"'+b+'"');
    var codeInitials = b;
    setState(codeInitials);
    dispatch({
        type: "GET_CODE_INITIALS",
        payload: codeInitials
      });
      window.location.reload();
}

console.log(`${JSON.parse(localStorage.getItem('name'))}`);
console.log(codeInitialsTest);
    return (
        <>
        <Formik>
            <StateSelector>
            <h1>State: {state}</h1>
        <Select style={{minWidth: 200}} variant="outlined" onChange={onStateChange}>
            <MenuItem value="AL">Alabama</MenuItem>
            <MenuItem value="AK">Alaska</MenuItem>
            <MenuItem value="AZ">Arizona</MenuItem>
            <MenuItem value="AR">Arkansas</MenuItem>
            <MenuItem value="CA">California</MenuItem>
            <MenuItem value="CO">Colorado</MenuItem>
            <MenuItem value="CT">Connecticut</MenuItem>
            <MenuItem value="DE">Delaware</MenuItem>
            <MenuItem value="FL">Florida</MenuItem>
            <MenuItem value="GA">Georgia</MenuItem>
            <MenuItem value="HI">Hawaii</MenuItem>
            <MenuItem value="ID">Idaho</MenuItem>
            <MenuItem value="IL">Illinois</MenuItem>
            <MenuItem value="IN">Indiana</MenuItem>
            <MenuItem value="IA">Iowa</MenuItem>
            <MenuItem value="KS">Kansas</MenuItem>
            <MenuItem value="KY">Kentucky</MenuItem>
            <MenuItem value="LA">Louisiana</MenuItem>
            <MenuItem value="ME">Maine</MenuItem>
            <MenuItem value="MD">Maryland</MenuItem>
            <MenuItem value="MA">Massachusetts</MenuItem>
            <MenuItem value="MI">Michigan</MenuItem>
            <MenuItem value="MN">Minnesota</MenuItem>
            <MenuItem value="MS">Mississippi</MenuItem>
            <MenuItem value="MO">Missouri</MenuItem>
            <MenuItem value="MT">Montana</MenuItem>
            <MenuItem value="NE">Nebraska</MenuItem>
            <MenuItem value="NV">Nevada</MenuItem>
            <MenuItem value="NH">New Hampshire</MenuItem>
            <MenuItem value="NJ">New Jersey</MenuItem>
            <MenuItem value="NM">New Mexico</MenuItem>
            <MenuItem value="NY">New York</MenuItem>
            <MenuItem value="NC">North Carolina</MenuItem>
            <MenuItem value="ND">North Dakota</MenuItem>
            <MenuItem value="OH">Ohio</MenuItem>
            <MenuItem value="OK">Oklahoma</MenuItem>
            <MenuItem value="OR">Oregon</MenuItem>
            <MenuItem value="PA">Pennsylvania</MenuItem>
            <MenuItem value="RI">Rhode Island</MenuItem>
            <MenuItem value="SC">South Carolina</MenuItem>
            <MenuItem value="SD">South Dakota</MenuItem>
            <MenuItem value="TN">Tennessee</MenuItem>
            <MenuItem value="TX">Texas</MenuItem>
            <MenuItem value="UT">Utah</MenuItem>
            <MenuItem value="VT">Vermont</MenuItem>
            <MenuItem value="VA">Virginia</MenuItem>
            <MenuItem value="WA">Washington</MenuItem>
            <MenuItem value="WV">West Virgina</MenuItem>
            <MenuItem value="WI">Wisconsin</MenuItem>
            <MenuItem value="WY">Wyoming</MenuItem>
        </Select>
            </StateSelector>
        </Formik>
    </>
    );
};

const mapStateToProps = state => {
    return {
        codeInitialsTest: state.codeInitialsTest
    }
}

const StateSelector = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    margin-top: 45px;
    margin-bottom: -20px;
`;

export default connect (mapStateToProps) (StateCodeStateCode);
