import '../App.css';
//REDUX
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStateData } from '../actions/stateAction';
import State from '../components/State';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
//MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Paper, Typography, Card, CardContent } from '@material-ui/core';
import { blue, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        justify: 'space-evenly',
        alignItems: 'center',
    },
    grid: {
        padding: theme.spacing(2),
    },
    card: {
        width: '100%',
        height: '100%',
        padding: theme.spacing(1),
        backgroundColor: '#172045'
    },
    cardContent: {
        backgroundColor: '#111B40',
    },
    typography: {

    }
}));

function DataCards() {
        //FETCH STATE DATA
    const dispatch = useDispatch();
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    
    useEffect(() => {
      dispatch(loadStateData());
    }, [dispatch]);
    // GET DATA
    const { stateData } = useSelector(
        (state) => state.stateDataToday //IN REDUX THE DEVTOOL THE STATE I WANT IS CALLED 'STATES'
    );
    if (loading) {
        return <p>Data is loading..</p>;
    }
{/*    if (error || !Array.isArray(stateData)) {
        return <p>There was an error loading your data!</p>;
    }
*/}
    return (
        <Grid className={classes.container} spacing={4} container>
            <Grid className={classes.grid} xs={12} sm={6} md={4} item>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                            Reported Cases
                        </Typography>
                        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                            {stateData.totalCases}
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary" gutterBottom>
                            {stateData.date}
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Total cases reported in the state since the inception of Covid-19 in the United States.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid className={classes.grid} xs={12} sm={6} md={4} item>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                            Reported Deaths
                        </Typography>
                        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                            {stateData.totalDeaths}
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary" gutterBottom>
                            {stateData.date}
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Total deaths reported in the state since the inception of Covid-19 in the United States.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid className={classes.grid} xs={12} sm={6} md={4} item>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                            New Cases Today
                        </Typography>
                        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                            {stateData.newCases}
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary" gutterBottom>
                            {stateData.date}
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Total cases reported in the state since the inception of Covid-19 in the United States.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid className={classes.grid} xs={12} sm={6} md={4} item>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                            New Deaths
                        </Typography>
                        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                            {stateData.newDeaths}
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary" gutterBottom>
                            {stateData.date}
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Total cases reported in the state since the inception of Covid-19 in the United States.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid className={classes.grid} xs={12} sm={6} md={4} item>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                            Cases per 100k People
                        </Typography>
                        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                            {Math.round(stateData.caseDensity)}
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary" gutterBottom>
                            {stateData.date}
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Total cases reported in the state since the inception of Covid-19 in the United States.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
                <Grid className={classes.grid} xs={12} sm={6} md={4} item>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                            Infection Rate
                        </Typography>
                        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                            {Math.round(((stateData.infectionRate) * 100))}%
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary" gutterBottom>
                            {stateData.date}
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Total cases reported in the state since the inception of Covid-19 in the United States.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid className={classes.grid} xs={12} sm={6} md={4} item>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                            ICU Capacity
                        </Typography>
                        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                            {Math.round(((stateData.icuCapacityRatio) * 100))}%
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary" gutterBottom>
                            {stateData.date}
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Total cases reported in the state since the inception of Covid-19 in the United States.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid className={classes.grid} xs={12} sm={6} md={4} item>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                            Vaccines Administered
                        </Typography>
                        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                            {Math.round(((stateData.vaccinationsInitiatedRatio) * 100))}%
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary" gutterBottom>
                            {stateData.date}
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Total cases reported in the state since the inception of Covid-19 in the United States.
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
                <Grid className={classes.grid} xs={12} sm={6} md={4} item>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                            Vaccines Completed
                        </Typography>
                        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
                            {Math.round(((stateData.vaccinationsCompletedRatio) * 100))}%
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary" gutterBottom>
                            {stateData.date}
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Total cases reported in the state since the inception of Covid-19 in the United States.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default DataCards;

{/*
            <Grid container spacing={5} className={classes.grid}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {stateData}
                    </Paper>
                    <h1>{stateData}</h1>
                </Grid>
            </Grid>
*/}