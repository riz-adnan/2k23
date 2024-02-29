import React, { Suspense } from 'react';
import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from './Loading';
import { BrowserView, MobileView } from 'react-device-detect';

import Footer from './components/Footer/footer';

import Homepage from './components/Homepage/Homepage';
import NavigationBar from './components/Navbar/navigationBar';
import Teams from './components/Teams/Teams';
import Cultural from './components/Eventspage/Culturalpage'
import App3d from './App3d';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Culturals from './components/Eventspage/Culturalspage';
import Login from './components/Login/Login';
import Register from './components/RegistrationPage/Register';
import Tech from './components/TechEvents/techEvents';
import Workshops from './components/Workshops/Workshops';
import SponsorsPage from './components/sponsors/sponsors';
import Payment from './components/Paymenttest/payment';
import Proshows from './components/Proshows/proshows';
import Merch from "./components/Merchpage/Merch";
import Sponsorship from './components/Teams/Sponsorship';
import Logistics from './components/Teams/Logistics';
import Marketing from './components/Teams/Marketing';
import Creative from './components/Teams/Creative';
import Finance from './components/Teams/Finance';
import EventsManagement from './components/Teams/EventsManagement';
import Graphics from './components/Teams/Graphics';
import WaitMerch from "./components/Merchpage/WaitMerch.jsx";
import WaitProShow from "./components/Proshows/WaitProshow.jsx";
import Redirect from "./components/Merchpage/Redirect.jsx"

// const NavigationBar = lazy(() => import('./components/Navbar/navigationBar'));
// const Homepage = lazy(() => import('./components/Homepage/Homepage'));
// const Teams = lazy(() => import('./components/Teams/Teams'));
// const App3d = lazy(() => import('./App3d'));
// const ComingSoon = lazy(() => import('./components/ComingSoon/ComingSoon'));
// const Culturals = lazy(() => import('./components/Eventspage/Culturalspage'));
// const Login = lazy(() => import('./components/Login/Login'));
// const Register = lazy(() => import('./components/RegistrationPage/Register'));
// const Tech = lazy(() => import('./components/TechEvents/techEvents'));
// const Footer = lazy(() => import('./components/Footer/footer'));
// const Payment = lazy(() => import('./components/Paymenttest/payment'));
// const Proshows = lazy(() => import('./components/Proshows/proshows'));
// const Workshops = lazy(() => import('./components/Workshops/Workshops'));

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <BrowserView>
              <App3d />
            </BrowserView>
            <MobileView>
              <NavigationBar />
              <Homepage />
              <Footer />
            </MobileView>

          </>
        } />
        <Route path="/cultural" element={
          <>
            <Culturals />

          </>
        } />
        <Route path="/technical" element={
          <>
            {/* <Suspense fallback={<Loading />}> */}
            <Tech />
            {/* </Suspense> */}


          </>
        } />
        <Route path="/workshop" element={
          <>

            <Workshops />


          </>
        } />
        <Route path="/payment" element={
          <>

            <Payment />

          </>
        } />
        <Route path="/sponsors" element={
          <>

            <NavigationBar pagetype="sponsors" />
            <SponsorsPage />
            <Footer />
          </>
        } />
        <Route path="/merchandise" element={
          <>

            <NavigationBar pagetype="merchandise" />


            {/* <ComingSoon /> */}
            <Merch />


            <Footer />

          </>
        } />
        <Route path="/waitmerch" element={
          <>

            <WaitMerch />


          </>
        } />
        <Route path="/ourteam/fest-heads" element={
          <>

            <NavigationBar pagetype="ContactUs" />


            <Teams />


          </>
        } />
        <Route path="/ourteam/creative" element={
          <>

            <NavigationBar pagetype="ContactUs" />


            <Creative />


          </>
        } />
        <Route path="/ourteam/eventsManagement" element={
          <>

            <NavigationBar pagetype="ContactUs" />


            <EventsManagement />


          </>
        } />
        <Route path="/ourteam/finance" element={
          <>

            <NavigationBar pagetype="ContactUs" />


            <Finance />


          </>
        } />
        <Route path="/ourteam/graphics" element={
          <>

            <NavigationBar pagetype="ContactUs" />


            <Graphics />


          </>
        } />
        <Route path="/ourteam/logistics" element={
          <>

            <NavigationBar pagetype="ContactUs" />


            <Logistics />


          </>
        } />
        <Route path="/ourteam/marketing" element={
          <>

            <NavigationBar pagetype="ContactUs" />


            <Marketing />


          </>
        } />
        <Route path="/ourteam/sponsorship" element={
          <>

            <NavigationBar pagetype="ContactUs" />


            <Sponsorship />


          </>
        } />
        
        <Route path="/proshows" element={
          <>

            <NavigationBar />
            <Proshows />
            <Footer />

          </>
        } />

        <Route path="/waitproshow" element={
          <>

            <WaitProShow />


          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>


  );
}
export default App;


/*

*/