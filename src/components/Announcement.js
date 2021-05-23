import React from 'react';
import styled from 'styled-components';

function Announcement() {
    return (
        <>
            <Card>
                <AnnouncementContainer>
                    <h1>Project Breathe</h1>
                    <p>The goal of Project Breathe is to keep you up-to-date on Covid-19. By using data from an API (that updates every day) you'll get a better idea of when
                    the pandemic will officially be over. Future features will likely include a county heat map of each state.</p>
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
    align-self: center;
    text-align: center;
    margin-top: 0px;
    width: 100%;
`;

const AnnouncementContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    margin: 30px 0px 0px 0px;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    max-width: 650px;
    width: 55%;
    box-shadow: 4px 4px 7px rgb(5, 5, 5, 0.2);
    border-radius: 5px;
    @media (max-width: 900px) {
        width: 80%;
    }
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
