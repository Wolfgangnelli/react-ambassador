import React from 'react';
import './index.css';
import Main from '../components/Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
