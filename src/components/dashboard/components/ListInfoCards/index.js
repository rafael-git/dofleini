import React from "react";

import InfoCard from "../InfoCard";
import './index.css';

const ListInfoCard = (props) => {
    const {dashboardInfo} = props;
    return(
        <div className='card-container'> 
             {dashboardInfo.map((card => (
                <div key={card.id} className='card'>
                    <InfoCard dashboardInfo={card}/> 
                </div>
                 
             )))}
        </div>
    );
}

export default ListInfoCard;