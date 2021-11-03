import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <main>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
