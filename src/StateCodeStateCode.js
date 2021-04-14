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
            <MenuItem value="AK" >Alaska</MenuItem>
            <MenuItem value="AZ" >Arizona</MenuItem>
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
    margin: 25px;
    border: 1px solid red;
    width: 100%;
    height: 20%;
`;

const State = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px;
    border: 1px solid red;
    width: 100%;
    height: 20%;
`;

export default connect (mapStateToProps) (StateCodeStateCode);
