import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../Products/Rating'
import products from '../../products'
// on each page of product
function ProductPage ({ match }) {
// look for id value
  const product = products.find((p) => p._id === match.params.id)
  return (
    <div>
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
                  className='btn btn-dark'
                  disabled= {product.countInStock === 0}
                >  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductPage
