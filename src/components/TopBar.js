import React from 'react';
import '../App.css';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';

function TopBar() {
    return (
        <TopBarContainer>
            <h1>
                project
                <span>BREATHE</span>
            </h1>
        </TopBarContainer>
    )
}

export default TopBar;


const TopBarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 10px;
    top: 0;
    background-color: white;
    h1 {  
        margin-left: 20px;
        font-size: 21px;
        color: #0e1111;
    }
    span {
        font-size: 21px;
        color: #87ceff;
    }


`;