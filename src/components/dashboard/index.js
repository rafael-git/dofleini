import React from "react";

import ListInfoCard from "./components/ListInfoCards";
import CertifiedList from "./components/CertifiedList";
import './index.css';


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
        </div>
    );
};

export default Dashboard;
