import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Chat from "./pages/Chat";
import Login from "./pages/login/Login";

// TODO: import all from pages/index

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/chat' element={<Chat />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
};

export default App;
