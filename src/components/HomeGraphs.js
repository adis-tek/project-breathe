import '../App.css';
//REDUX
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStateDataHistory } from '../actions/stateDataHistoryAction';
import State from './State';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts';

function HomeGraphs() {
    //FETCH STATE HISTORY DATA
    const dispatch = useDispatch();
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
        if (loading) {
            return <p>Data is loading..</p>;
        }
        if (error || !Array.isArray(stateDataHistoryActuals)) {
            return <p>There was an error loading your data!</p>;
          }
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
    //LINE GRAPH
    const chartData = [];
    for (let i = 0; i < date.length; i++) {
        const newRow = {};
        newRow.name = date[i];
        newRow.data = cases[i];
        chartData.push(newRow);
    }

    return (
            <StateHistory>
                <Graphs>
                    <h1>HomeGraphs</h1>
                    {/*{console.log(cases)}*/}
                    <LineChart width={900} height={500} data={chartData}>
                    <Line type="monotone" dataKey="data" stroke="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="data" />
                    <Tooltip />
                    </LineChart>
                    {console.log(chartData)}
                </Graphs>
            </StateHistory>
    );
};

export default HomeGraphs;

const StateHistory = styled(motion.div)`

`;

const Graphs = styled(motion.div)`

`;