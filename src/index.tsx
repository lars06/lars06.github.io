import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="music" element={<Music/>} />
          <Route path="*" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
