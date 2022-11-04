import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Screens/AboutUs";
import HomeScreen from "./Screens/HomeScreen";
import Notfound from "./Screens/Notfound";
import ContactUs from "./Screens/ContactUs";
import FolhetosScreen from "./Screens/FolhetosScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/new-ones" element={<FolhetosScreen />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
