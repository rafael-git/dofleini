import React from 'react';

import CardHowTo from '../CardHowTo';
import './index.css';

const CardsHowToList = (props) => {
    const { cardsInfo } = props;
    return (
        <div className='cards-how-container'>
            {cardsInfo.map(card => (
                <CardHowTo key={card.id} cardsInfo={card} />
            ))}
        </div>
    );
};

export default CardsHowToList;