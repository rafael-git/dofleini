import React from 'react';
import Certified from '../Certified';
import './index.css'

const CertifiedList = (props) => {
    const {certified} = props;
    return (
        <div className='certified-container'>
            {certified.map((cert) => (
                <Certified certified={cert}/>
            ))}
        </div>
    );
};

export default CertifiedList;