import '../App.css';
//REDUX
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStateData } from '../actions/stateAction';
import State from '../components/State';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Home() {
    //FETCH STATE DATA
    const dispatch = useDispatch();
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
    if (error || !Array.isArray(stateData)) {
        return <p>There was an error loading your data!</p>;
    }
    
    return (
            <StateList>
                <StateData>
                    <h1>Home</h1>
                    {stateData.map((item) => (
                        <State />
                    ))}
                </StateData>
            </StateList>
    );
};

export default Home;

const StateList = styled(motion.div)`

`;

const StateData = styled(motion.div)`

`;