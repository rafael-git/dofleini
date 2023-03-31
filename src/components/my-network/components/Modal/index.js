import React, { useState } from 'react'
import './index.css'

const Modal = (props) => {

    const { open , toggleModal } = props;
    const [object, setObject] = useState({});


    const handleChange = (e) => {
        setObject({
            ...object,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(object);
        toggleModal();
    };

    return (
    <>
        {open && (
            <div className='modal'>
                <div className='overlay' onClick={toggleModal}></div>
                <div className='modal-content'>
                <div className='modal-header'>Edit</div>
                    <form onSubmit={handleSubmit} className='form'>
                        <label for='input-text' className='label'>
                            Name:
                            <input name='name' id='input-text' type='text' onChange={handleChange}/>
                        </label>
                        <label className='label' for='textarea'>
                            Description
                            <textarea name='description' id='textarea' type='text' onChange={handleChange}/>
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

