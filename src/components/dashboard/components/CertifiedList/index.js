import React from 'react';
import Certified from '../Certified';
import './index.css'

const CertifiedList = (props) => {
    const {certified} = props;
    return (
        <div className='certified-container'>
            {certified.map((cert) => (
                <Certified  key={cert.id} certified={cert}/>
            ))}
        </div>
    );
};

export default CertifiedList;