import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './CSS/style.css';
import Header from './app/Layout/Header';
import FooterMarginTop from './app/Layout/FooterMaginTop';
import Footer from './app/Layout/Footer';
import NavBar from './app/Components/Navigation/NavBar';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopicsCovered from './Pages/TopicsCovered';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="topicscovered" element = {<TopicsCovered />} />
    </Routes>
    <FooterMarginTop />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
