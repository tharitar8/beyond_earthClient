import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { viewProducts } from '../../api/product'
import { Container } from 'semantic-ui-react'

class Product extends Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null,
      loading: false,
      products: []
    }
  }

  componentDidMount () {
    viewProducts()
      .then((res) => {
        console.log(res)
        this.setState({ products: res.data, loading: false })
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
    console.log('this.state.in product form', this.state)
    const productJsx = this.state.products.map((product) => (
      <Container key={product._id}>
        <Card className='my-3 p-3 rounded'>
          <Link to={`/products/${product._id}`}>
            <Card.Img src={product.image} />
          </Link>

          <Card.Body>
            <Link to={`/products/${product._id}`}>
              <Card.Title as='div'>
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
            <Card.Text as='div'>
              <div className='my-3'>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color={'gold'}
                />
              </div>
            </Card.Text>

            <Card.Text as='h6'>${product.price}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    ))
    return <div> {productJsx}</div>
  }
}
export default Product
