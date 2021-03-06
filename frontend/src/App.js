import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import VaccineStatusPage from './pages/VaccineStatusPage';
import ReservationPage from './pages/ReservationPage';
import ResultPage from './pages/ResultPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>코로나19 백신 접종 예약</title>
      </Helmet>
      <Route component={HomePage} path="/" exact />
      <Route component={HomePage} path="/home" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={VaccineStatusPage} path="/vaccineStatus" />
      <Route component={ReservationPage} path="/reservation" />
      <Route component={ResultPage} path="/result" />
    </>
  );
};

export default App;
