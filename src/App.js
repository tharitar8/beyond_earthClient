/* eslint-disable no-tabs */
// this page is for a route to each url
import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AuthenticatedRouteSignIn from './components/AuthenticatedRoute/AuthenticatedRouteSignIn'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Footer from './components/Footer/Footer'
// import Homepage from './components/Homepage/Homepage'
import HomePageAllProducts from './components/Products/HomePageAllProducts'
import ProductPage from './components/Products/ProductPage'
import CartPage from './components/Products/CartPage'
import './app.scss'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      order: null,
      msgAlerts: []
    }
  }

    setUser = (user) => this.setState({ user })
    setOrder = (order) => this.setState({ order })
    clearOrder = () => this.setState({ order: null })
    clearUser = () => this.setState({ user: null })

    deleteAlert = (id) => {
      this.setState((state) => {
        return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
      })
    }

    msgAlert = ({ heading, message, variant }) => {
      const id = uuid()
      this.setState((state) => {
        return {
          msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
        }
      })
    }

    render () {
      const { msgAlerts, user, order } = this.state
      return (
        <Fragment>
          <Header user={user} order={order} />
          {msgAlerts.map((msgAlert) => (
            <AutoDismissAlert
              key={msgAlert.id}
              heading={msgAlert.heading}
              variant={msgAlert.variant}
              message={msgAlert.message}
              id={msgAlert.id}
              deleteAlert={this.deleteAlert}
            />
          ))}
          <main className='container'>
            <Route path='/' component={HomePageAllProducts} exact />

            <AuthenticatedRouteSignIn
              user={user}
              path='/product/:id'
              render={(props) => (
                <ProductPage
                  {...props}
                  user={user}
                  order={order}
                  msgAlert={this.msgAlert}
                  setOrder={this.setOrder}
                />
              )}
            />
            <AuthenticatedRoute
              user={user}
              path='/orders/'
              render={() => (
                <CartPage user={user} order={order} setOrder={this.setOrder} />
              )}
            />
            <AuthenticatedRouteSignIn
              user={user}
              path='/order/:id'
              render={() => (
                <CartPage user={user} order={order} setOrder={this.setOrder} />
              )}
            />

            <Route
              path='/sign-up'
              render={() => (
                <SignUp
                  msgAlert={this.msgAlert}
                  setUser={this.setUser}
                  setOrder={this.setOrder}
                />
              )}
            />
            <Route
              path='/sign-in'
              render={() => (
                <SignIn
                  msgAlert={this.msgAlert}
                  setUser={this.setUser}
                  setOrder={this.setOrder}
                />
              )}
            />
            <AuthenticatedRoute
              user={user}
              path='/sign-out'
              render={() => (
                <SignOut
                  msgAlert={this.msgAlert}
                  clearUser={this.clearUser}
                  user={user}
                />
              )}
            />
            <AuthenticatedRoute
              user={user}
              path='/change-password'
              render={() => (
                <ChangePassword msgAlert={this.msgAlert} user={user} />
              )}
            />
          </main>
          <Footer />
        </Fragment>
      )
    }
}

export default App
