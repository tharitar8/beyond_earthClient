import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { showOneProduct, addProductToOrder } from '../../api/product'
import { Container } from 'semantic-ui-react'
import { updateOrderSuccess } from '../AutoDismissAlert/messages'

class ProductPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      products: null,
      msgAlerts: []
    }
  }

  componentDidMount () {
    const { match } = this.props
    showOneProduct(match.params.id)
      .then((res) => {
        console.log('one product detail', res)
        this.setState({ products: res.data })
      })
      .catch((err) => {
        this.setState({ error: err, loading: false })
      })
  }

    onAddToCart = (event) => {
      const { order, user, msgAlert } = this.props
      const { products } = this.state
      console.log('add to cart function', this.props)
      addProductToOrder(user, order, products)
        .then(() =>
          msgAlert({
            heading: 'Post Updated!',
            message: updateOrderSuccess,
            variant: 'success'
          })
        )
    }

    render () {
      if (this.state.products === null) {
        return 'loading...'
      }
      if (this.products === null) {
        ;<h3>No product</h3>
      }
      const product = this.state.products
      return (
        <Container>
          <Link to='/' className='btn btn-light may-3'>
            Back
          </Link>
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>

            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>{product.name}</ListGroup.Item>
              </ListGroup>

              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>Detail: {product.description}</ListGroup.Item>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        Price: <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button
                      onClick={() => this.onAddToCart()}
                      className='btn btn-dark'
                    >
                      {' '}
                      Add to cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      )
    }
}

export default ProductPage
