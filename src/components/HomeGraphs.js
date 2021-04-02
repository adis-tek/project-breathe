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
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 600, pv: 1400, amt: 1400}, {name: 'Page C', uv: 800, pv: 400, amt: 400}];

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
    //LINE GRAPH
    return (
            <StateHistory>
                <Graphs>
                    <h1>HomeGraphs</h1>
                    {/*{console.log(cases)}*/}
                    <LineChart width={800} height={800} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    </LineChart>
                </Graphs>
            </StateHistory>
    );
};

export default HomeGraphs;

const StateHistory = styled(motion.div)`

`;

const Graphs = styled(motion.div)`

`;