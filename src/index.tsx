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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <NavBar />
    <Home />
    <FooterMarginTop />
    <Footer />
  </React.StrictMode>
);
