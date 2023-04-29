import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar} from './components';
import Home from './components/Home';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => (
  // <div>
  //   <Navbar />
  //   <Header />
  //   <AboutUs />
  //   <SpecialMenu />
  //   <Intro />
  //   {/* <Laurels /> */}
  //   <Gallery />
  //   <FindUs />
  //   <Footer />
  // </div>
  <BrowserRouter>
        <Navbar/>
        {/* <Header/> */}
        {/* <AboutUs /> */}
        {/* <SpecialMenu />
        <Intro /> */}
        {/* <Laurels /> */}
        {/* <Gallery />
        <FindUs /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/menu" element={<SpecialMenu />} />
            <Route path="/Contact" element={< FindUs/>} />
            <Route path="/Gallery" element={< Gallery/>} />

        </Routes>
      <Footer />
      </BrowserRouter>
);

export default App;
