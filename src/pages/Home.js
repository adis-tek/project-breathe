import '../App.css';
//REDUX
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStateData } from '../actions/stateAction';
import State from '../components/State';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DataCards from '../components/DataCards';
import HomeGraphs from '../components/HomeGraphs';

function Home() {
    return (
        <DataCards />
    );
};

export default Home;