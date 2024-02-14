import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home'
import Browse from './Browse/Browse'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element = {<Header />}>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/Browse' element = {<Browse />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);