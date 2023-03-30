import React from "react";
import { useState } from "react";

const ColorPicker = () => {

    const[color, setColor] = useState('#FFFFFF');

    const handleColor = (e) => {
        e.preventDefault();
        setColor(e.value);
    }

    return(
        <div className='colors-picker'>
            <div className='input-color'> 
                <input type='color' onChange={handleColor} value={color}/>
            </div>
            <div className='input-color'> 
                <input type='color' onChange={handleColor} value={color}/>
            </div>
            <div className='input-color'> 
                <input type='color' onChange={handleColor} value={color}/>
            </div>
            <div className='input-color'> 
                <input type='color' onChange={handleColor} value={color}/>
            </div>
        </div>
    );
}

export default ColorPicker;