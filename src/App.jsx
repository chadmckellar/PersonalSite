import React from 'react';
import './tailwind.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bookshelf from './pages/Bookshelf';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Bookshelf" element={<Bookshelf />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
