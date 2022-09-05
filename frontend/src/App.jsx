import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";


function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/write" element={<Write/>} />
          <Route path="/post" element={<Single />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;