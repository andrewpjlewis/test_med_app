// Import necessary modules from React library
import React, { useEffect } from "react";

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Sign_Up from "./components/signup/signup";
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import Landing_Page from "./components/landingpage/landingpage";
import InstantConsultation from "./components/InstantConsultation/InstantConsultation";
import DoctorCard from './components/DoctorCard/DoctorCard';
import Notification from './components/Notification/Notification';
import ReviewForm from './components/ReviewForm/ReviewForm';

// Function component for the main App
function App() {
  // Render the main App component
  return (
    <div className="App">
      <BrowserRouter>
      <Notification>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/signup" element={<Sign_Up />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route
            path="/InstantConsultation"
            element={<InstantConsultation />}
          />
          <Route path="/ReviewForm" element={<ReviewForm />} />
          <Route path="/DoctorCard" element={<DoctorCard />} />
        </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
