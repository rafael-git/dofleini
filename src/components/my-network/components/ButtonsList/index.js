import React from "react";

import './index.css';

import Button from "../Button";

const ButtonsList = (props) => {
    const {buttonInfo} = props;
    return (
        <div className='buttons-container'>
            {buttonInfo.map(info => (
                 <Button buttonInfo={info}/>
            ))}
        </div>
    );
}

export default ButtonsList;