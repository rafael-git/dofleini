import React from "react";

import './index.css';


const Dashboard = (props) => {
    const {
        dashboardInfo
    } = props;
    return (
        <div className='dashboard-container'> 
        {console.log('dashboardInfo', dashboardInfo)}
            DASHBOARD
        </div>
    );
};

export default Dashboard;
