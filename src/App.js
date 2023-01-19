import React from 'react';
import './App.css';
import Header from './components/header/Headers';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service from './components/services/Service';
import Qualification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Service />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
