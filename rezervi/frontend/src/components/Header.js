import React from 'react'
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
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
      <Navbar variant='dark' expand='lg' collapseOnSelect>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img src='/images/logo.png' alt='Rezervi' style={{width: 150}} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar'>
          <Nav className='ml-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/events'>
              <Nav.Link>Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart'>
              <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
              </LinkContainer>
            )}
            {userInfo && userInfo.isSupervisor && (
              <NavDropdown title='Supervisor' id='supervisormenu'>
                <LinkContainer to='/supervisor/eventlist'>
                  <NavDropdown.Item>Events</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/supervisor/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='adminmenu'>
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/eventlist'>
                  <NavDropdown.Item>Events</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orderlist'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
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
