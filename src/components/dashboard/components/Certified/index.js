import React from "react";

import modwell from '../../../../assets/img/modwell.png'
import ok from '../../../../assets/img/ok.png'

import './index.css';

const Certified = (props) => {
    const{ certified } = props;
    return (
        <div className='certified-description'>
            <div className='certified'>
                <img  className='img-certified' src={modwell} alt='text'/>
                <div className='fifth-circle'>
                    <div className='fourth-circle'>
                        <div className='third-circle'>
                            <div className='second-circle'>
                                <div className='inner-circle'>
                                    <div className='certified-content'>
                                        <div className='certified-title'>
                                            {certified.title}
                                        </div>
                                        <div className='certified-value'>
                                            {certified.certified ? 'certified' : 'not certified'}
                                        </div>
                                        {certified.certified ? <img className='img-check' src={ok} alt='check'/> : null}
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='description'>
                <span className='description-text'>{certified.description}</span>
            </div>
        </div>
        
        
    );
};

export default Certified;