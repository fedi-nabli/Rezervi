import React from 'react'
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import SearchBox from './SearchBox'
import {logout} from '../store/actions/userActions'

function Header() {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img src='/images/logo.png' alt='Rezervi' style={{width: 150}} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar'>
          <Route render={({history}) => <SearchBox history={history} />} />
          <Nav className='ml-auto'>
            <LinkContainer to='/'>
              <Nav.Link><i className='fas fa-home'></i> Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/events'>
              <Nav.Link><i className='fas fa-calendar-day'></i> Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link><i className='fas fa-address-card'></i> About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link><i className='fas fa-phone-square-alt'></i> Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
              <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item><i className='fas fa-user'></i> Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}><i className='fas fa-sign-out-alt'></i> Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isSupervisor && !userInfo.isAdmin && (
              <NavDropdown title='Supervisor' id='supervisormenu'>
                <LinkContainer to='/supervisor/eventlist'>
                  <NavDropdown.Item><i className='fas fa-calendar-day'></i> Events</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/supervisor/orderlist'>
                  <NavDropdown.Item><i className='fas fa-file-invoice-dollar'></i> Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu'>
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item><i className='fas fa-user'></i> Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/eventlist'>
                  <NavDropdown.Item><i className='fas fa-calendar-day'></i> Events</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item><i className='fas fa-file-invoice-dollar'></i> Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
