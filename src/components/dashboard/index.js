import React from "react";
import './index.css';

import ListInfoCard from "./components/ListInfoCards";
import CertifiedList from "./components/CertifiedList";
import CardsHowToList from "./components/CardsHowToList";




const Dashboard = (props) => {
    const {
        dashboardInfo,
        cardsInfo,
        certified,
    } = props;
    return (
        <div className='dashboard-container'> 
            <div className='dashboard-header'>
                <h1 className='dashboard-title'>How it works</h1>
                <span className='dashboard-subtitle'>Learn how best to use modwell!</span>
            </div>
            <ListInfoCard dashboardInfo={dashboardInfo}/>
             <CertifiedList certified={certified}/>
             <CardsHowToList cardsInfo={cardsInfo}/>
        </div>
    );
};

export default Dashboard;
