import React from 'react';
import Router from './router';
import './app.css';
import Banner from './pages/banner';
import AboutUs from './pages/aboutus';
import Footer from './pages/footer';

function App() {
  return (
    <div>
      <div className='main'>
        <Router />
        <Banner />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
