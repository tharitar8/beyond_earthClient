import React, { Component } from 'react'
import { showOneOrder, viewProducts, deleteOrder, createOrder, updateItemInCart } from '../../api/product'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

class CartPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      orderProductList: [],
      allProducts: {},
      orderObject: {}
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
    // 1. define an empty object - done
    const itemObject = {}
    // 2. iterate over the array (products) done
    // 3. each item, we want to set the id as key, and value as the item. done
    products.forEach(product => {
      itemObject[product.id] = product
    })
    // 4. return object
    return itemObject
  }

  handleDeleteAll () {
    const { user, order, setOrder } = this.props
    deleteOrder(user, order)
      .then((res) => {
        this.setState({ orderProductList: [] })
        return createOrder(user)
      })
      .then((res) => setOrder(res.data))
      .catch((err) => {
        this.setState({ error: err, loading: false })
      })
  }

  handleUpdate (productId) {
    const { user } = this.props
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
          <Button onClick={() => this.handleUpdate(productId)}>
             Remove{' '}
          </Button>
          <Card className='my-3 p-3 rounded'>
            <Card.Body>
              <Link to={`/product/${productData.id}`}>
                <Card.Title as='div'>
                  <strong>{productData.name}</strong>
                </Card.Title>
              </Link>
              <Card.Text as='h6'>${productData.price}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      )
    })
    return <div>{productJsxList}
      <Button onClick= {this.handleDeleteAll} disabled={orderProductList.length === 0} >Delete Order</Button>

    </div>
  }
}

export default CartPage
