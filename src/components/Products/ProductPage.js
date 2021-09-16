import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import Rating from '../Products/Rating'
import products from '../../products'

function ProductPage ({ match }) {
  // look for id value
  const product = products.find((p) => p._id === match.params.id)
  return (
    <div>
      <Link to='/' className='btn btn-light may-3'>
				Return
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
              text={`${product.numReviews} reviews`}></Rating>
          </ListGroup.Item>

          <ListGroup.Item>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}></Rating>
          </ListGroup.Item>

        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  )
}

export default ProductPage
