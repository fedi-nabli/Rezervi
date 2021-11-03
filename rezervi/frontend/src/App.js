import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import CartScreen from './screens/CartScreen'
import OrderListScreen from './screens/OrderListScreen'
import EventListScreen from './screens/EventListScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import EventCreateScreen from './screens/EventCreateScreen'
import EventEditScreen from './screens/EventEditScreen'
import EventScreen from './screens/EventScreen'
import EventsScreen from './screens/EventsScreen'
import OrderScreen from './screens/OrderScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import PaymentScreen from './screens/PaymentScreen'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/event/:id' component={EventScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/supervisor/orderlist' component={OrderListScreen} exact />
          <Route path='/supervisor/orderlist/:pageNumber' component={OrderListScreen} exact />
          <Route path='/supervisor/eventlist' component={EventListScreen} />
          <Route path='/supervisor/event/create' component={EventCreateScreen} />
          <Route path='/supervisor/event/:id/edit' component={EventEditScreen} />
          <Route path='/admin/userList' component={UserListScreen} exact />
          <Route path='/admin/userList/:pageNumber' component={UserListScreen} exact />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} exact />
          <Route path='/admin/orderlist/:pageNumber' component={OrderListScreen} exact />
          <Route path='/admin/eventlist' component={EventListScreen} exact />
          <Route path='/admin/event/create' component={EventCreateScreen} />
          <Route path='/admin/event/:id/edit' component={EventEditScreen} />
          <Route path='/events/page/:pageNumber' component={EventsScreen} exact />
          <Route path="/search/:keyword" component={EventsScreen} exact />
          <Route path="/search/:keyword/page/:pageNumber" component={EventsScreen} exact />
          <Route path='/events' component={EventsScreen} exact />
          <Route path='/' component={HomeScreen} exact />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
