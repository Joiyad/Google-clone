import React, { useState } from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Routes from '../components/Routes';

function Homepage() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routes/>
        <Footer/>
      </div>
    </div>
  );
}

export default Homepage;