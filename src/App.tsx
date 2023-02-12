import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<About />} />
      </Routes>
  );
}

export default App;


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
