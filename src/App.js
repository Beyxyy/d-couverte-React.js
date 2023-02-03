import React from 'react';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import Page from './view/page.js';
import Page2 from './view/page2.js';
import Home from './view/home.js';
import Navigation from './components/Navigation.js';

export default function App() {
  return (
    //garder la div globale sinon ca marche pas
    <div>
      {/*ici j'affiche les pages */}
      <Routes>
        <Route path="/page1" element={<Page />} />
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>

      {/* ici j'affiche le menu nav */}
      <Navigation />
    </div>
  );
}
