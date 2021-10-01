import React, { Component } from 'react'
import { showOneOrder, viewProducts, deleteOrder, createOrder, updateItemInCart } from '../../api/product'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { updateCartSuccess } from '../AutoDismissAlert/messages'

class CartPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      orderProductList: [],
      allProducts: {},
      orderObject: {},
      msgAlerts: []
    }
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
  }

  componentDidMount () {
    const { user, order } = this.props
    showOneOrder(user, order)
      .then((res) => {
        this.setState({ orderProductList: res.data.order.productlist, orderObject: res.data.order })
      })
      .catch((err) => {
        this.setState({ error: err, loading: false })
      })
    viewProducts()
      .then((res) => {
        this.setState({ allProducts: this.normalizeProductsData(res.data) })
      })
      .catch((err) => {
        this.setState({ error: err, loading: false })
      })
  }

  // if not passing in the product it will be an empty array
  normalizeProductsData (products = []) {
    // define an empty object
    const itemObject = {}
    // iterate over the array (products)
    // each item,  want to set the id as key, and value as the item
    products.forEach(product => {
      itemObject[product.id] = product
    })
    // return object
    return itemObject
  }

  handleDeleteAll () {
    const { user, order, setOrder, msgAlert } = this.props
    deleteOrder(user, order)
      .then((res) => {
        this.setState({ orderProductList: [] })
        return createOrder(user)
      })
      .then((res) => setOrder(res.data))
      .then(() =>
        msgAlert({
          heading: 'Your cart updated!',
          message: updateCartSuccess,
          variant: 'success'
        })
      )
      .catch((err) => {
        this.setState({ error: err, loading: false })
      })
  }

  handleUpdate (productId) {
    const { user, msgAlert } = this.props
    const newProductList = this.state.orderProductList.filter(
      (id) => {
        return id !== productId
      }
    )
    const newOrderObject = this.state.orderObject
    newOrderObject.productlist = newProductList
    updateItemInCart(user, newOrderObject)
      .then((res) => {
        this.setState({
          orderProductList: newProductList,
          orderObject: newOrderObject
        })
      })
      .then(() =>
        msgAlert({
          heading: 'Your cart updated!',
          message: updateCartSuccess,
          variant: 'success'
        })
      )
      .catch((err) => {
        this.setState({ error: err, loading: false })
      })
  }

  render () {
    const { allProducts, orderProductList, loading } = this.state

    if (loading) {
      return 'loading...'
    }
    if (orderProductList.length === 0) {
      return <h3> no product</h3>
    }

    const productJsxList = orderProductList.map(productId => {
      const productData = allProducts[productId]
      return (
        <Container key={productData.id}>
          <Card className='my-3 p-3 rounded'>
            <Card.Body>
              <Link to={`/product/${productData.id}`}>
                <Card.Title as='div'>
                  <strong>{productData.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as='h6'>${productData.price}</Card.Text>
              <Button className="btn btn-dark" onClick={() => this.handleUpdate(productId)}>
                    Remove{' '}
              </Button>
            </Card.Body>
          </Card>
        </Container>
      )
    })
    return (
      <div>
        {productJsxList}
        <Button
          className='btn btn-danger'
          onClick={this.handleDeleteAll}
          disabled={orderProductList.length === 0}>
            Delete Order
        </Button>
      </div>
    )
  }
}

export default CartPage
