/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import FrameOne from './Sections/Frame1';
import './App.css'
import NavBar from './Sections/NavBar';
import Main from './Sections/Main';
import Testimonials from './Sections/Testimonials';

const App = () => {
  return <Fragment>
    <NavBar />
    <FrameOne />
    <Main />
    <Testimonials />
  </Fragment>
}

export default App
