import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
