import React from "react";
import {Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux'

import './LayoutContainer.css'

import Header from "./header";
import MyNetwork from "./my-network";
import Dashboard from "./dashboard";

const LayoutContainer = (props) => {
    const dashboardState = useSelector(state => state.dashboard);
    return(
        <div className='container'>
            <Header />

            <Routes>
                <Route path='my-network' element={<MyNetwork />} />
                <Route path='dashboard' element={<Dashboard dashboardInfo = {dashboardState}/>} />
            </Routes>
        </div>
    );
};

  

export default LayoutContainer;