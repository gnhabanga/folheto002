import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Screens/AboutUs";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Notfound from "./Screens/Notfound";
import ContactUs from "./Screens/ContactUs";
import FolhetosScreen from "./Screens/FolhetosScreen";
import SingleFolheto from "./Screens/SingleFolheto";
import FolhetoShow from "./Components/Single/FakeSlide";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/new-ones" element={<FolhetosScreen />} />
      <Route path="/folheto/:idcompany" element={<SingleFolheto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/folheto/:idcompany/:id/show" element={<FolhetoShow />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
