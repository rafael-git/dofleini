import React from "react";
import ButtonsList from "../ButtonsList";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../redux/homes/modalSlice";


import ColorPicker from "../ColorPicker";

import './index.css';


const HomeVault = (props) => {
    const {
        homeInfo,
        buttonInfo,
        open
    } = props;

    const dispatch = useDispatch();
    
    const handleModal = () => {
        dispatch(toggleModal(!open))
    };
 
    return(
        <>
            <div className='header-title'>
                Home Vault Manager
            </div>
            <div className='address-edit'>
                <span className='address'>{homeInfo.address}</span>
                <span className='edit' onClick={()=>handleModal()}>Edit</span>
            </div>
            <div className='home-details-edit'>
                <span className='home-details'>{`${homeInfo.beds} BEDS | ${homeInfo.baths} BATHS | ${homeInfo.sqft} Sqft | ${homeInfo.acres} Acres`}</span>
                <span className='edit'onClick={()=>handleModal()} >Edit</span>
            </div>
           <ColorPicker />
           <div className='home-profile'>
                <div className='profile'>
                    <span id='profile-title'>Home Profile Strength: </span>
                    <span id='profile-category'>{` ${homeInfo.homeProfile}`}</span>
                </div>
                <span id='profile-description'>
                    Upload your survey floor plants and images to start building your model
                </span>
           </div>
            <ButtonsList buttonInfo={buttonInfo} />
            <div className='checkbox-container'>
                <div className='check-text'>
                    <span className='blue-text'>Publicly Listed</span>
                    <div className="checkbox-example">
                        <input type="checkbox" value="1" id="checkboxOneInput" />
                        <label htmlFor="checkboxOneInput"></label>
                    </div>
                </div>
                <span className='second-text'>Discoverable on modwell homepage, search, and your profile</span>
            </div>

        </>
    );
};

export default HomeVault;
