import React, { Component } from 'react'
import { showOneOrder, viewProducts, deleteOrder, createOrder } from '../../api/product'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

class CartPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      orderProductList: [],
      allProducts: {}
    }
    this.handleDeleteAll = this.handleDeleteAll.bind(this)
  }

  componentDidMount () {
    const { user, order } = this.props
    // console.log('show', user, order, match)
    showOneOrder(user, order)
      .then((res) => {
        // console.log(res.data.order.productlist)
        this.setState({ orderProductList: res.data.order.productlist })
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

  render () {
    const { allProducts, orderProductList } = this.state
    if (this.state.products === null) {
      return 'loading...'
    }
    // variable to save array.map()
    if (this.products === null) {
      <h3>No product</h3>
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
            </Card.Body>
          </Card>
        </Container>
      )
    })
    return <div>{productJsxList}
      <Button onClick= {this.handleDeleteAll}>Delete Order</Button>
    </div>
  }
}

export default CartPage
