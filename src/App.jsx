/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { Fragment, useState, useEffect } from 'react';
import PopUpCard from './UI/PopUpCard';
import FrameOne from './Sections/Frame1';
import './App.css';
import NavBar from './Sections/NavBar';
import Main from './Sections/Main';
import Testimonials from './Sections/Testimonials';
import CountdownTimer from './UI/Timer';
import SlideInCard from './UI/SlideInCard';

const App = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);

  const [timerComplete, setTimerComplete] = useState(false);

  const handleTimerComplete = () => {
    setTimerComplete(true);
  };

  const onClose = () => {
    setShowPopUp(false)
  }


  const data = [
    { name: 'Mason', country: 'Canada' },
    { name: 'Olivia', country: 'USA' },
    { name: 'Liam', country: 'UK' },
    { name: 'Isabella', country: 'Brazil' },
    { name: 'Noah', country: 'Germany' },
    { name: 'Ava', country: 'France' },
    { name: 'Ethan', country: 'USA' },
    { name: 'Sophia', country: 'Canada' },
    { name: 'Lucas', country: 'UK' },
    { name: 'Mia', country: 'Brazil' },
    { name: 'William', country: 'Germany' },
    { name: 'Emma', country: 'USA' },
    { name: 'Henry', country: 'Canada' },
    { name: 'Charlotte', country: 'UK' },
    { name: 'Alexander', country: 'Brazil' },
    { name: 'Sophie', country: 'France' },
    { name: 'Luna', country: 'USA' },
    { name: 'Liam', country: 'Canada' },
    { name: 'Oliver', country: 'UK' },
    { name: 'Aria', country: 'Brazil' },
    { name: 'Ella', country: 'Germany' },
    { name: 'Elijah', country: 'USA' },
    { name: 'Benjamin', country: 'Canada' },
    { name: 'Amelia', country: 'UK' },
    { name: 'Harper', country: 'Brazil' },
    { name: 'James', country: 'Germany' }
  ]

  const getRandomData = () => {
    return data[currentDataIndex];
  };

  useEffect(() => {
    const popUpInterval = setInterval(() => {
      setShowPopUp(false);
    }, 5000); // Hide the pop-up after 10 seconds

    const displayInterval = setInterval(() => {
      setCurrentDataIndex((prevIndex) => (prevIndex + 1) % data.length);
      setShowPopUp(true);
    }, 10000); // Display new data every 12 seconds (10 seconds hidden + 2 seconds displayed)

    return () => {
      clearInterval(popUpInterval);
      clearInterval(displayInterval);
    };
  }, []);

  return (
    <Fragment>
      {showPopUp && <PopUpCard {...getRandomData()} onClick={onClose} />}
      {timerComplete ? <SlideInCard onClose={() => setTimerComplete(true)} /> : <CountdownTimer onTimerComplete={handleTimerComplete} />}
      {/* <CountdownTimer /> */}
      <NavBar />
      <FrameOne />
      <Main />
      <Testimonials />
    </Fragment>
  );
};

export default App;
