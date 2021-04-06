import '../App.css';
//REDUX
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStateDataHistory } from '../actions/stateDataHistoryAction';
import State from './State';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip  } from 'recharts';
import { format, parseISO, subDays } from "date-fns";

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
                    <div style={{marginLeft: 30 + 'px'}}>
                    <AreaChart width={800} height={500} data={chartData}>
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
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid opacity={0.1} vertical={false} />
                    </AreaChart>
                    {console.log(vaccinationsCompletedRatio)}
                    </div>
                </Graphs>
            </StateHistory>
    );
};

function CustomTooltip({active, payload, label}) {
    if (active) {
        return (
        <div className="tooltip" >
            <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
            <p>
                {payload[0].value} Cases
            </p>
        </div>
        )
    }
    return null;
}

export default HomeGraphs;

const StateHistory = styled(motion.div)`

`;

const Graphs = styled(motion.div)`

`;