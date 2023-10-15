/* eslint-disable no-unused-vars */
import React from 'react';
import VideoOne from '../Asset/bgVidOne.mp4';
import VideoTwo from '../Asset/bgVidTwo.mp4';
import VideoThree from '../Asset/bgVidThree.mp4';
import Style from './Frame1.module.css'
import Overlay from '../UI/Overlay';
import audio from '../Asset/audio.mp3'

const FrameOne = () => {
    return <div className={Style.FrameOne}>
        <Overlay />
        <audio autoPlay={true}  loop={true}>
            <source src={audio} type='audio/mp3' />
        </audio>
        <video src={VideoOne} autoPlay={true} loop={true} muted={true}/>
        <video src={VideoThree} autoPlay={true} className={Style.displayNone} loop={true} muted={true}/>
        <video src={VideoTwo} autoPlay={true} className={Style.displayOff} loop={true} muted={true} />
    </div>
}

export default FrameOne;