// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatInterface from './components/ChatInterface';
import QRSection from './components/QRSection';
import './assets/styles/App.css';
import './assets/styles/CustomStyles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="top-section">
        <main>
          <div className="hero">
            <h1 className="hero-title">Join the JEE-revolution</h1>
            <p className="hero-subtitle">Sub-text here</p>
          </div>
          <QRSection />
        </main>
      </div>
      <div className="learning-section">
        <h2 className="learning-title">Unlimited Questions</h2>
        <p className="learning-subtitle">On your fingertips</p>
        <ChatInterface className="chat-interface" /> {/* Added class for styling */}
        <h4 className="learning-footer">Anytime, Anywhere!</h4>
      </div>
      <Footer />
    </div>
  );
}

export default App;