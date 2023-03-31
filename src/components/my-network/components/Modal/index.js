import React, { useState } from 'react'
import './index.css'

const Modal = (props) => {

    const { open , toggleModal } = props;

    return (
    <>
        {open && (
            <div className='modal'>
                <div className='overlay' onClick={toggleModal}></div>
                <div className='modal-content'>
                <div className='modal-header'>Edit</div>
                    <form className='form'>
                        <label className='label'>
                            Name:
                            <input className='input-text' type='text' />
                        </label>
                        <label className='label'>
                            Description
                            <textarea className='textarea' type='text' />
                        </label> 
                        <div className='buttons-modal'>
                            <button className='button'>Edit</button>
                            <button className='button' onClick={toggleModal}>Close</button>  
                        </div> 
                       
                    </form>
                </div>
            </div>            
        )}
    
    </>
    );
};

export default Modal;

