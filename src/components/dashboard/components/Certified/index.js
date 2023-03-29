import React from "react";

import modwell from '../../../../assets/img/modwell.png'
import ok from '../../../../assets/img/ok.png'

import './index.css';

const Certified = (props) => {
    return (
        <div className='certified'>
            <img  className='img-certified' src={modwell} alt='text'/>
            <div className='fifth-circle'>
                <div className='fourth-circle'>
                    <div className='third-circle'>
                        <div className='second-circle'>
                            <div className='inner-circle'>
                                <div className='certified-content'>
                                    <div className='certified-title'>
                                        {'3D Design'}
                                    </div>
                                    <div className='certified-value'>
                                        {'certified'}
                                    </div>
                                    <img className='img-check' src={ok} alt='check'/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Certified;