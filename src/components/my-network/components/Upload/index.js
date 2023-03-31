import React, { useRef } from "react";
import './index.css';

const Upload = (props) => {
    const {category} = props;

    const fileName = useRef();

    const handleFile = (e) =>  {
        e.preventDefault();
        fileName.current.files[0].name !== undefined ? console.log(fileName.current.files[0].name) : console.log('No file selected')
        
    };


    return(
        <div className="upload-btn-wrapper">
            <div className='inside-upload'>
                <span id='plus'>+</span>
                <span id='category'>{category}</span>
                <span id='description'>Click to Upload</span>
            </div>
            <input type="file"
                ref={fileName} 
                name="myfile" 
                onChange={(e)=> handleFile(e)}
            />
        </div>
    );
};

export default Upload;