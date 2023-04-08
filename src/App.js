import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
// import Aboutus from './components/Aboutus';
import Alert from './components/Alert';
import Tbox from './components/Tbox';
// import { Route, Routes } from "react-router-dom";



function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.body.style.backgroundColor = '#FFFFFF';
      toggleAlert("success","Light mode is enabled");

    } else {
      setTheme('dark');
      document.body.style.backgroundColor = 'rgb(19 24 29)';
      toggleAlert("success","Dark mode is enabled");
      
    }
  };

  const [alert, setalert] = useState(null);
  const toggleAlert = (type, msg) => {
    setalert({
      type: type,
      msg: msg,
    })
    setTimeout(() => {
      setalert(null);
    }, 1250);

  }
  


  return (
    <>
      <Navbar title='TxTrumble' info='About us' mode={theme} toggleTheme={toggleTheme} />
      <Alert alert={alert} />
      <div className="container">
      <Tbox heading='Enter the text below to achieve your desires :-' toggleAlert={toggleAlert} mode={theme} />
        {/* <Routes>
          <Route path="/" element={<Tbox heading='Enter the text below to achieve your desires :-' toggleAlert={toggleAlert} mode={theme} />} />
          <Route path='/Aboutus' element={<Aboutus />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
