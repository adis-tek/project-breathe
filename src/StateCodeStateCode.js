import React, { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage';
import { Grid, Container, Paper, Typography, Card, CardContent, MenuItem, Menu, Select } from '@material-ui/core';
import {   Formik, Field, Form, FieldAttributes, FieldArray } from 'formik';
import { useDispatch, useSelector} from 'react-redux';
import { loadCodeInitials } from './actions/codeInitialAction';
import { loadStateData } from './actions/stateAction';
import { loadStateDataHistory } from './actions/stateDataHistoryAction';
import { connect } from 'react-redux';

function StateCodeStateCode() {
    const dispatch = useDispatch();
    const [state, setState] = useLocalStorage('name', '')

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
            <div>
        <Select variant="outlined" onChange={onStateChange}>
            <MenuItem value="AL">AL</MenuItem>
            <MenuItem value="AK" >AK</MenuItem>
            <MenuItem value="AZ" >AZ</MenuItem>
        </Select>
            </div>
        </Formik>
    </>
    );
};

const mapStateToProps = state => {
    return {
        codeInitialsTest: state.codeInitialsTest
    }
}

export default connect (mapStateToProps) (StateCodeStateCode);
