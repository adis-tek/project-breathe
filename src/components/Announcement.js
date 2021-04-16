import React from 'react';
import styled from 'styled-components';

function Announcement() {
    return (
        <>
            <Card>
                <AnnouncementContainer>
                    <h1>Project Breathe Prototype</h1>
                    <p>The goal of Project Breathe is to keep you up-to-date on Covid-19. By using data from an API (that updates every day) you'll get a better idea of when
                    the pandemic will officially be over. Future features will likely include a county heat map of each state.</p>
                    <p><span>Version 1.0:</span> This project marks the first time I used Redux and React together. 
                    The project will be updated later once I get more comfortable with redux and learn how to officially integrate the state switcher properly.
                     Also, this site is currently optimized for wide screens.</p>
                </AnnouncementContainer>
            </Card>
        </>
    )
};

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 30px;
`;

const AnnouncementContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    width: 55%;
    h1 {
        width: 75%;
        margin-top: 30px;
        margin-bottom: 25px;
    }
    p {
        width: 75%;
        margin-bottom: 25px;
        line-height: 30px;
    }
    span {
        width: 75%;
        font-weight: bold;
        text-decoration: underline;
    }

`;

export default Announcement;
