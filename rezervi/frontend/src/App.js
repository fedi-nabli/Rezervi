import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
