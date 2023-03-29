import React from "react";

import './index.css';

const CardHowTo = (props) => {
    const {
        cardsInfo
    } = props;
    return(
        <div className='how-to-card'>
            <div className='band-card'></div>
            <div className='card-info'>
                <span className='how-to-title'>{cardsInfo.title}</span>
                <span className='how-to-description'>{cardsInfo.info}</span>
            </div>
        </div>
    );
};
 export default CardHowTo;