import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { viewOrderProducts, updateOrder, deleteOrder } from '../../api/product'

class CartPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      products: [],
      order: null
    }
  }

  componentDidMount () {
    const { user, order } = this.props
    // console.log('what is order', order)
    viewOrderProducts(user, order)
      .then((res) => {
        console.log('this res.data', res.data.order)
        this.setState({ order: res.data.order })
      })
      .then(() => console.log('new console', this.state.products))
      .catch((err) => {
        this.setState({ error: err, loading: false })
      })
  }

  // handles state change for input
  // handleChange = (event) => {
  //   const userInput = { [event.target.name]: event.target.value }
  //   this.setState((currState) => {
  // "Spread" out current post state key/value pairs
  //     return { product: { ...currState.product, ...userInput } }
  //   })
  // }

  // updates cart on click
    onUpdateCart = (event) => {
      // prevent page reload
      event.preventDefault()
      // destructuring props for later use
      const { user, product, order } = this.props
      // updateCart API call
      updateOrder(user, product, order)
        .then((res) => {
          this.setState({ products: res.data })
        })
        .catch((err) => {
          this.setState({ error: err, loading: false })
        })
    }

    handleDeleteCart = (id) => {
      // destructuring props for later use
      const { match, user } = this.props
      // delete cart API call
      deleteOrder(match.params.id, id, user)
        .then((res) => {
          this.setState({ products: res.data })
        })
        .catch((err) => {
          this.setState({ error: err, loading: false })
        })
    }

    render () {
      if (this.state.products === null) {
        return 'loading...'
      }
      // variable to save array.map()
      if (this.products === null) {
        <h3>No product</h3>
      }
      const productOrder = this.state.products.map((product) => (
        <div key={product.id} className='col-3 mt-5'>
          <Card style={{ width: '25rem' }} className='m-auto'>

            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Price: ${product.price}</Card.Text>

              <Card.Text>
                  Subtotal: {product.price}
              </Card.Text>

              <Button
                onClick={() => this.onUpdateCart(product.id)}
                variant='secondary'></Button>{' '}

            </Card.Body>
          </Card>
        </div>
      ))
      console.log('cart on CartPage', this.state.products)
      return <div>{productOrder}</div>
    }
}
export default withRouter(CartPage)
