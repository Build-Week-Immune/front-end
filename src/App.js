// This is the home page of our app
// This page contains a nav bar (including a sign in link), a footer bar, and a main component
// Nav bar of this page includes a text 'Immune' at top left, and link to sign in page top right
// The main component includes link to Create Account page
// The footer contains a link to marketing page

// Connects to: './components/Auth/Login.js' || './components/Register/HomeRegister.js' || Marketing Page

import React from 'react';
import Navbar from './components/Bars/Navbar';
import Footer from './components/Bars/Footer';
import TopHome from './components/HomePage/TopHome';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopHome />
      <Footer />
    </div>
  );
}

export default App;
