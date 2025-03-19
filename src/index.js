import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/skills" element={<Home />} />
      <Route path="/projects" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>

 
);


