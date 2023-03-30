import React from "react";
import ButtonsList from "../ButtonsList";


import ColorPicker from "../ColorPicker";
import './index.css';


const HomeVault = (props) => {
    const {
        homeInfo,
        buttonInfo
    } = props;

    return(
        <>
            <div className='header-title'>
                Home Vault Manager
            </div>
            <div className='address-edit'>
                <span className='address'>{homeInfo.address}</span>
                <span className='edit'>Edit</span>
            </div>
            <div className='home-details-edit'>
                <span className='home-details'>{`${homeInfo.beds} BEDS | ${homeInfo.baths} BATHS | ${homeInfo.sqft} Sqft | ${homeInfo.acres} Acres`}</span>
                <span className='edit'>Edit</span>
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

        </>
    );
};

export default HomeVault;
