import React from "react";

import HomeVault from "./components/HomeVault";
import './index.css';

const MyNetwork = (props) => {
    const {
        homeInfo,
        buttonInfo
    } = props;
    return(
        <div className='my-network-container'>
            <div className='first-section'>
                <HomeVault homeInfo={homeInfo} buttonInfo={buttonInfo}/>
            </div>
            <div className='second-section'></div>
            <div className='third-section'></div>
        </div>
    );
};

export default MyNetwork;