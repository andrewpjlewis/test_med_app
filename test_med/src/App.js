// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Sign_Up from './components/signup/signup';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Landing_Page from './components/landingpage/landingpage';
import InstantConsultation from './components/InstantConsultation/InstantConsultation'; 

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
  <Routes>
      {/* Define individual Route components for different pages */}
                <Route path="/" element={<Landing_Page/>}/>
                <Route path ="/signup" element={<Sign_Up/>} />
                <Route path ="/login" element={<Login/>} />
                <Route path ="/navbar" element={<Navbar/>} />
                <Route path="/instant-consultation" element={<InstantConsultation />} />
              </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;