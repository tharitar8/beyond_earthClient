import React, { Component } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { viewProducts } from '../../api/product'
import { Container } from 'semantic-ui-react'
import '../Products/HomePage.scss'

class Product extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      products: []
    }
  }

  componentDidMount () {
    // console.log('Is product id showing on this view products', this.props)
    viewProducts()
      .then((res) => {
        // console.log(res)
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
    const productJsx = this.state.products.map((product) => (
      <Container key={product.id} id="flex-grid">
        <Row>
          <div className="col">
            <div className='card'>
              <img
                className='card-img-top'
                src='https://i.imgur.com/atgwTiC.jpg'
                width='100'
                height='100'
              />
              <div className='card-body'>
                <Link to={`/product/${product.id}`}>
                  <h5 className='card-title'>
                    <strong>{product.name}</strong>
                  </h5>
                </Link>
                <Card.Text as='h6'>${product.price}</Card.Text>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    ))
    return <div> {productJsx}</div>
  }
}
export default Product
