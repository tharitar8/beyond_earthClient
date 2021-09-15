import React from 'react'
import { Card } from 'react-bootstrap'

function Product ({ product }) {
  return (
    <Card className='my-p3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong> {product.name}</strong>
          </Card.Title>
        </a>
        <Card.text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews}
          </div>
        </Card.text>
      </Card.Body>
    </Card>
  )
}

export default Product
