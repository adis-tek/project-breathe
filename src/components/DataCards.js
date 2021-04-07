import '../App.css';
//REDUX
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStateData } from '../actions/stateAction';
import { loadStateDataHistory } from '../actions/stateDataHistoryAction';
import State from '../components/State';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
//MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Paper, Typography, Card, CardContent } from '@material-ui/core';
import { blue, yellow } from '@material-ui/core/colors';
import { LineChart, Line, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts';
import { format, parseISO, subDays } from "date-fns";

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
        backgroundColor: '#172045',
        display: 'flex',
        justifyContent: 'center'
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
    const [data, setData] = useState();

    useEffect(() => {
        dispatch(loadStateDataHistory());
      }, [dispatch]);
      // GET DATA
      const { stateDataHistoryActuals } = useSelector(
          (state) => state.stateHistory //IN REDUX THE DEVTOOL THE STATE I WANT IS CALLED 'STATES'
      );
      useEffect(() => {
        dispatch(loadStateDataHistory());
      }, [dispatch]);
      // GET DATA
      const { stateDataHistoryMetrics } = useSelector(
          (state) => state.stateHistory //IN REDUX THE DEVTOOL THE STATE I WANT IS CALLED 'STATES'
      );
    //ACTUALS DATA
    const cases = stateDataHistoryActuals.map((point) => point.cases);
    const deaths = stateDataHistoryActuals.map((point) => point.deaths);
    const newCases = stateDataHistoryActuals.map((point) => point.newCases);
    const newDeaths = stateDataHistoryActuals.map((point) => point.newDeaths);
    //METRICS DATA
    const caseDensity = stateDataHistoryMetrics.map((point) => point.caseDensity);
    const infectionRate = stateDataHistoryMetrics.map((point) => point.infectionRate);
    const icuCapacityRatio = stateDataHistoryMetrics.map((point) => point.icuCapacityRatio);
    const vaccinationsInitiatedRatio = stateDataHistoryMetrics.map((point) => point.vaccinationsInitiatedRatio);
    const vaccinationsCompletedRatio = stateDataHistoryMetrics.map((point) => point.vaccinationsCompletedRatio);
    const date = stateDataHistoryMetrics.map((point) => point.date);
    //AREA GRAPH



    const casesData = [];
    for (let i = 0; i < date.length; i++) {
        const newRow = {};
        newRow.name = date[i];
        newRow.data = cases[i];
        casesData.push(newRow);
    }

    const deathsData = [];
    for (let i = 0; i < date.length; i++) {
        const newRow = {};
        newRow.name = date[i];
        newRow.data = deaths[i];
        deathsData.push(newRow);
    }

    const newCasesData = [];
    for (let i = 0; i < date.length; i++) {
        const newRow = {};
        newRow.name = date[i];
        newRow.data = newCases[i];
        newCasesData.push(newRow);
    }

    const newDeathsData = [];
    for (let i = 0; i < date.length; i++) {
        const newRow = {};
        newRow.name = date[i];
        newRow.data = newDeaths[i];
        newDeathsData.push(newRow);
    }

    const caseDensityData = [];
    for (let i = 0; i < date.length; i++) {
        const newRow = {};
        newRow.name = date[i];
        newRow.data = caseDensity[i];
        caseDensityData.push(newRow);
    }

    const infectionRateData = [];
    for (let i = 0; i < date.length; i++) {
        const newRow = {};
        newRow.name = date[i];
        newRow.data = infectionRate[i];
        infectionRateData.push(newRow);
    }

    const icuCapacityRatioData = [];
    for (let i = 220; i < date.length; i++) {
        const newRow = {};
        newRow.name = date[i];
        newRow.data = icuCapacityRatio[i];
        icuCapacityRatioData.push(newRow);
    }

    const vaccinationsInitiatedRatioData = [];
    for (let i = 388; i < date.length; i++) {
        const newRow = {};
        newRow.name = date[i];
        newRow.data = vaccinationsInitiatedRatio[i];
        vaccinationsInitiatedRatioData.push(newRow);
    }

    const vaccinationsCompletedRatioData = [];
    for (let i = 388; i < date.length; i++) {
        const newRow = {};
        newRow.name = date[i];
        newRow.data = vaccinationsCompletedRatio[i];
        vaccinationsCompletedRatioData.push(newRow);
    }

    function getNum(val) {
        if (isNaN(val)) {
            return 0;
        }
        return val;
    }

    
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
                        <AreaChart margin={0} width={350} height={350} data={casesData}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.1} />
                                <stop offset="50%" stopColor="#2451B7" stopOpacity={0.05} />
                                <stop offset="70%" stopColor="#2451B7" stopOpacity={0.025} />
                                <stop offset="80%" stopColor="#2451B7" stopOpacity={0.0} />
                                <stop offset="90%" stopColor="#2451B7" stopOpacity={0.00} />

                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="data" stroke="#2451B7" fill="url(#color" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickCount={2} tickFormatter={str => {const date = parseISO(str);
                        if (date.getDate() %1 === 0) {
                            return format(date, "MMM, d")
                            }
                            return "";
                        }}
                        />
                        <YAxis dataKey="data" axisLine={false} tickLine={false} tickCount={6} tickFormatter={num =>{const value = num;
                        if (value > 1000000) {
                            return `${value / 1000000}m`
                        }
                        if (value > 1000) {
                            return `${value / 1000}k`
                        }
                        return value;
                        }} />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        <CartesianGrid opacity={0.1} vertical={false} />
                        </AreaChart>
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
                        <AreaChart margin={0} width={350} height={350} data={deathsData}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.1} />
                                <stop offset="50%" stopColor="#2451B7" stopOpacity={0.05} />
                                <stop offset="70%" stopColor="#2451B7" stopOpacity={0.025} />
                                <stop offset="80%" stopColor="#2451B7" stopOpacity={0.0} />
                                <stop offset="90%" stopColor="#2451B7" stopOpacity={0.00} />

                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="data" stroke="#2451B7" fill="url(#color" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickCount={2} tickFormatter={str => {const date = parseISO(str);
                        if (date.getDate() %1 === 0) {
                            return format(date, "MMM, d")
                            }
                            return "";
                        }}
                        />
                        <YAxis dataKey="data" axisLine={false} tickLine={false} tickCount={6} tickFormatter={num =>{const value = num;
                        if (value > 1000000) {
                            return `${value / 1000000}m`
                        }
                        if (value > 1000) {
                            return `${value / 1000}k`
                        }
                        return value;
                        }} />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        <CartesianGrid opacity={0.1} vertical={false} />
                        </AreaChart>
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
                        <AreaChart margin={0} width={350} height={350} data={newCasesData}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.1} />
                                <stop offset="50%" stopColor="#2451B7" stopOpacity={0.05} />
                                <stop offset="70%" stopColor="#2451B7" stopOpacity={0.025} />
                                <stop offset="80%" stopColor="#2451B7" stopOpacity={0.0} />
                                <stop offset="90%" stopColor="#2451B7" stopOpacity={0.00} />

                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="data" stroke="#2451B7" fill="url(#color" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickCount={2} tickFormatter={str => {const date = parseISO(str);
                        if (date.getDate() %1 === 0) {
                            return format(date, "MMM, d")
                            }
                            return "";
                        }}
                        />
                        <YAxis dataKey="data" axisLine={false} tickLine={false} tickCount={6} tickFormatter={num =>{const value = num;
                        if (value > 1000000) {
                            return `${value / 1000000}m`
                        }
                        if (value > 1000) {
                            return `${value / 1000}k`
                        }
                        return value;
                        }} />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        <CartesianGrid opacity={0.1} vertical={false} />
                        </AreaChart>
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
                        <AreaChart margin={0} width={350} height={350} data={newDeathsData}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.1} />
                                <stop offset="50%" stopColor="#2451B7" stopOpacity={0.05} />
                                <stop offset="70%" stopColor="#2451B7" stopOpacity={0.025} />
                                <stop offset="80%" stopColor="#2451B7" stopOpacity={0.0} />
                                <stop offset="90%" stopColor="#2451B7" stopOpacity={0.00} />

                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="data" stroke="#2451B7" fill="url(#color" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickCount={2} tickFormatter={str => {const date = parseISO(str);
                        if (date.getDate() %1 === 0) {
                            return format(date, "MMM, d")
                            }
                            return "";
                        }}
                        />
                        <YAxis dataKey="data" axisLine={false} tickLine={false} tickCount={6} tickFormatter={num =>{const value = num;
                        if (value > 1000000) {
                            return `${value / 1000000}m`
                        }
                        if (value > 1000) {
                            return `${value / 1000}k`
                        }
                        return value;
                        }} />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        <CartesianGrid opacity={0.1} vertical={false} />
                        </AreaChart>
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
                        <AreaChart margin={0} width={350} height={350} data={caseDensityData}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.1} />
                                <stop offset="50%" stopColor="#2451B7" stopOpacity={0.05} />
                                <stop offset="70%" stopColor="#2451B7" stopOpacity={0.025} />
                                <stop offset="80%" stopColor="#2451B7" stopOpacity={0.0} />
                                <stop offset="90%" stopColor="#2451B7" stopOpacity={0.00} />

                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="data" stroke="#2451B7" fill="url(#color" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickCount={2} tickFormatter={str => {const date = parseISO(str);
                        if (date.getDate() %1 === 0) {
                            return format(date, "MMM, d")
                            }
                            return "";
                        }}
                        />
                        <YAxis dataKey="data" axisLine={false} tickLine={false} tickCount={6} tickFormatter={num =>{const value = num;
                        if (value > 1000000) {
                            return `${value / 1000000}m`
                        }
                        if (value > 1000) {
                            return `${value / 1000}k`
                        }
                        return value;
                        }} />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        <CartesianGrid opacity={0.1} vertical={false} />
                        </AreaChart>
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
                            {getNum(stateData.infectionRate).toFixed(2)}
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary" gutterBottom>
                            {stateData.date}
                        </Typography>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            Total cases reported in the state since the inception of Covid-19 in the United States.
                        </Typography>
                        <AreaChart margin={0} width={350} height={350} data={infectionRateData}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.1} />
                                <stop offset="50%" stopColor="#2451B7" stopOpacity={0.05} />
                                <stop offset="70%" stopColor="#2451B7" stopOpacity={0.025} />
                                <stop offset="80%" stopColor="#2451B7" stopOpacity={0.0} />
                                <stop offset="90%" stopColor="#2451B7" stopOpacity={0.00} />

                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="data" stroke="#2451B7" fill="url(#color" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickCount={2} tickFormatter={str => {const date = parseISO(str);
                        if (date.getDate() %1 === 0) {
                            return format(date, "MMM, d")
                            }
                            return "";
                        }}
                        />
                        <YAxis dataKey="data" axisLine={false} tickLine={false} tickCount={6} tickFormatter={num =>{const value = num;
                        if (value > 1000000) {
                            return `${value / 1000000}m`
                        }
                        if (value > 1000) {
                            return `${value / 1000}k`
                        }
                        return value;
                        }} />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        <CartesianGrid opacity={0.1} vertical={false} />
                        </AreaChart>
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
                        <AreaChart margin={0} width={350} height={350} data={icuCapacityRatioData}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.1} />
                                <stop offset="50%" stopColor="#2451B7" stopOpacity={0.05} />
                                <stop offset="70%" stopColor="#2451B7" stopOpacity={0.025} />
                                <stop offset="80%" stopColor="#2451B7" stopOpacity={0.0} />
                                <stop offset="90%" stopColor="#2451B7" stopOpacity={0.00} />

                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="data" stroke="#2451B7" fill="url(#color" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickCount={2} tickFormatter={str => {const date = parseISO(str);
                        if (date.getDate() %1 === 0) {
                            return format(date, "MMM, d")
                            }
                            return "";
                        }}
                        />
                        <YAxis dataKey="data" axisLine={false} tickLine={false} tickCount={6} tickFormatter={num =>{const value = num;
                        if (value > 0) {
                            return `${value * 100}%`
                        }
                        return value;
                        }} />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        <CartesianGrid opacity={0.1} vertical={false} />
                        </AreaChart>
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
                        <AreaChart margin={0} width={350} height={350} data={vaccinationsInitiatedRatioData}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.1} />
                                <stop offset="50%" stopColor="#2451B7" stopOpacity={0.05} />
                                <stop offset="70%" stopColor="#2451B7" stopOpacity={0.025} />
                                <stop offset="80%" stopColor="#2451B7" stopOpacity={0.0} />
                                <stop offset="90%" stopColor="#2451B7" stopOpacity={0.00} />

                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="data" stroke="#2451B7" fill="url(#color" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickCount={2} tickFormatter={str => {const date = parseISO(str);
                        if (date.getDate() %1 === 0) {
                            return format(date, "MMM, d")
                            }
                            return "";
                        }}
                        />
                        <YAxis dataKey="data" axisLine={false} tickLine={false} tickCount={6} tickFormatter={num =>{const value = num;
                        if (value > 1000000) {
                            return `${value / 1000000}m`
                        }
                        if (value > 1000) {
                            return `${value / 1000}k`
                        }
                        return value;
                        }} />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        <CartesianGrid opacity={0.1} vertical={false} />
                        </AreaChart>
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
                        <AreaChart margin={0} width={350} height={350} data={vaccinationsCompletedRatioData}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.1} />
                                <stop offset="50%" stopColor="#2451B7" stopOpacity={0.05} />
                                <stop offset="70%" stopColor="#2451B7" stopOpacity={0.025} />
                                <stop offset="80%" stopColor="#2451B7" stopOpacity={0.0} />
                                <stop offset="90%" stopColor="#2451B7" stopOpacity={0.00} />

                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="data" stroke="#2451B7" fill="url(#color" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tickCount={2} tickFormatter={str => {const date = parseISO(str);
                        if (date.getDate() %1 === 0) {
                            return format(date, "MMM, d")
                            }
                            return "";
                        }}
                        />
                        <YAxis dataKey="data" axisLine={false} tickLine={false} tickCount={6} tickFormatter={num =>{const value = num;
                        if (value > 1000000) {
                            return `${value / 1000000}m`
                        }
                        if (value > 1000) {
                            return `${value / 1000}k`
                        }
                        return value;
                        }} />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        <CartesianGrid opacity={0.1} vertical={false} />
                        </AreaChart>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

/*
function CustomTooltip({active, payload, label}) {
    if (active) {
        return (
        <div className="tooltip" >
            <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
            <p>
                {payload[0].value} Cases
                {console.log(payload[0].value)}
            </p>
        </div>
        )
    }
    return <p>LOADING</p>;
}
*/

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