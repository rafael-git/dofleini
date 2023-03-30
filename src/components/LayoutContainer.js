import React from "react";
import {Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux'

import './LayoutContainer.css'

import Header from "./header";
import MyNetwork from "./my-network";
import Dashboard from "./dashboard";

const LayoutContainer = (props) => {
    const dashboardState = useSelector(state => state.dashboard);
    const cardState = useSelector(state=> state.cards);
    const certifiedState = useSelector(state=> state.certifieds);
    const flagState = useSelector(state=> state.flag);
    console.log(flagState);
    return(
        <div className='container'>
            <Header />
            <div className={flagState.flag ? 'content-network' : 'content'}>
                <Routes>
                    <Route path='my-network' element={<MyNetwork />} />
                    <Route path='dashboard' element={<Dashboard dashboardInfo = {dashboardState} cardsInfo={cardState} certified={certifiedState}/>} />
                </Routes>
            </div>
            
        </div>
    );
};

  

export default LayoutContainer;