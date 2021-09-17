import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
// import product array
import products from '../../products'
// Product component
import Product from '../Products/ProductForm'
// homepage loop through all products to show
function Homepage () {
  return (
    <div>
      <h1> Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h5>{product.name}</h5>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default withRouter(Homepage)
