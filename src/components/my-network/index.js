import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import Modal from "./components/Modal/index";

import Intro from '../../assets/videos/Intro.mp4'
import HomeVault from "./components/HomeVault";
import 'react-html5video/dist/styles.css'
import './index.css';

import Upload from "./components/Upload";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/homes/modalSlice";

const MyNetwork = (props) => {
    const {
        homeInfo,
        buttonInfo,
        open
    } = props;

    const dispatch = useDispatch();

    return(
        <div className='my-network-container'>
            <div className='first-section'>
                <HomeVault homeInfo={homeInfo} open={open} buttonInfo={buttonInfo}/>
            </div>
            <div className='second-section'>
                <div className='upload-section'>
                    <Upload category={'Survey'}/>
                    <Upload category={'Floor Plans'}/>
                    <Upload category={'Images'}/>
                </div>
                <button className='download-button'>Download All</button>
            </div>
            <div className='third-section'>
                <div className='video-container'>
                    <Video>
                        <source src={Intro} type='video/mp4' />
                    </Video>
                </div>
            </div>
            <Modal open={open} toggleModal={() => dispatch(toggleModal(!open))}/>
        </div>
    );
};

export default MyNetwork;