import React from "react";

import IconCard from "../IconCard";
import './index.css';

const InfoCard = (props) => {
    const {dashboardInfo} = props; 
         
    return(
        <>
            <IconCard  svg={dashboardInfo.svg}/>
            <div className='card-text'>
                <span className='card-title'>
                    {dashboardInfo.title}
                </span>
                <span className='card-subtitle'>
                     {dashboardInfo.subTitle}
                </span>
                <span className='card-description'>
                    {dashboardInfo.description}
                </span>
            </div>
            <div className='card-image'>
                <img className='img-card' src={dashboardInfo.imgURL}  alt='img'/>
            </div>
        </>
        
    );
};

export default InfoCard;