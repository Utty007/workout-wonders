/* eslint-disable no-unused-vars */
import React from 'react';
import VideoOne from '../Asset/bgVidOne.mp4';
import VideoTwo from '../Asset/bgVidTwo.mp4';
import VideoThree from '../Asset/bgVidThree.mp4';
import Style from './Frame1.module.css'
import Overlay from '../UI/Overlay';

const FrameOne = () => {
    return <div className={Style.FrameOne}>
        <Overlay />
        <video src={VideoOne} autoPlay={true} loop={true} muted={true}/>
        <video src={VideoThree} autoPlay={true} loop={true} muted={true}/>
        <video src={VideoTwo} autoPlay={true} loop={true} />
    </div>
}

export default FrameOne;