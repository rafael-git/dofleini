import React from 'react';

import './index.css';


const Button = (props) => {
    const {buttonInfo} = props;
    return(
        <div className='button-container'>
            <span className='blue-text'>{buttonInfo.title}</span>
            <span className='subtitle-text'>{buttonInfo.subtitle}</span>
        </div>
    );
};

export default Button;