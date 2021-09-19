import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../Products/Rating'
import { showOneProduct, addToCartPage } from '../../api/product'
import { Container } from 'semantic-ui-react'

class ProductPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      products: null
    }
  }

  componentDidMount () {
    const { match } = this.props

    showOneProduct(match.params.id)
      .then((res) => {
        this.setState({ products: res.data })
      })
      .catch((err) => {
        this.setState({ error: err, loading: false })
      })
  }

    onCreateCart = () => {
      // const { msgAlert } = this.props
      // const { user } = this.props.user
      // create post API call
      // console.log('test', user)
      addToCartPage(this.state.products, this.props.user)
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

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color='gold'></Rating>
              </ListGroup.Item>
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
                    <Row>
                      <Col>
                        Status :{' '}
                        {product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button
                      onClick={() => this.onCreateCart(product._id)}
                      className='btn btn-dark'
                      disabled={product.countInStock === 0}>
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
