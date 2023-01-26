import './App.css';
import "./assets/stylesheets/reservationFeatureStyle.css"

import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ReservationDetails from"./components/ReservationDetails"
import ReservationAccountCreation from './components/ReservationAccountCreation';
import { Routes, Route} from "react-router-dom";
import ReservationConfirmation from './components/ReservationConfirmation';
//import { useLayoutEffect, useRef, useState } from 'react';

function App() {

  return (
    <React.Fragment>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/reservations" element={<ReservationDetails/>}/>
          <Route exact path="/reservation-create-account" element={<ReservationAccountCreation/>} />
          <Route exact path="/reservation-confirmation" element={<ReservationConfirmation/>} />
          <Route component={Error} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
