import '../App.css';
//REDUX
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStateDataHistory } from '../actions/stateDataHistoryAction';
import State from '../components/State';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';

function HomeGraphs() {
    //FETCH STATE HISTORY DATA
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        dispatch(loadStateDataHistory());
      }, [dispatch]);
      // GET DATA
      const { stateDataHistory } = useSelector(
          (state) => state.stateHistory //IN REDUX THE DEVTOOL THE STATE I WANT IS CALLED 'STATES'
      );
        if (loading) {
            return <p>Data is loading..</p>;
        }
        if (error || !Array.isArray(stateDataHistory)) {
            return <p>There was an error loading your data!</p>;
          }
    return (
            <StateHistory>
                <Graphs>
                    <h1>HomeGraphs</h1>
                    {/* Errored out when it was stateDataHistory.timeSeries
                    because timeSeries is already specified in the action */}
                    {stateDataHistory.map((item) => (
                        <State />
                    ))}
                </Graphs>
            </StateHistory>
    );
};

export default HomeGraphs;

const StateHistory = styled(motion.div)`

`;

const Graphs = styled(motion.div)`

`;