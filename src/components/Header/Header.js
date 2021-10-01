import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import './Header.scss'

const authenticatedOptions = (
  <Fragment>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <NavLink exact to='/' className='nav-link'>Products</NavLink>
  </Fragment>
)

const Header = ({ user, order }) => {
  return (
    <Navbar className='navbar1' variant='dark' expand='md'>
      <Navbar.Brand>
        <Link
          to='/'
          style={{ color: '#FFF', textDecoration: 'none' }}
          className='text-center py-3'>
          <img
            src='https://i.imgur.com/T63cfTh.png'
            alt='logo'
            width='30'
            height='30'></img>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {user && (
            <span className='navbar-text mr-2'>Welcome, {user.email}</span>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
      {order
        ? (
          <NavLink
            exact
            to={`/order/${order.id}`}
            className='nav-link'
            id='text-bar'>
            <i className='fas fa-cart-plus'></i> CART
          </NavLink>
        )
        : (
          ''
        )}
    </Navbar>
  )
}

export default Header
