
// import React, { Component } from 'react'
// import { Card } from 'react-bootstrap'
// import { Link, withRouter } from 'react-router-dom'
// import Rating from './Rating'
// import { viewProducts } from '../../api/product'
// import { Container } from 'semantic-ui-react'

// class CartPage extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       loading: false,
//       products: []
//     }
//   }

//   componentDidMount () {
//     viewProducts()
//       .then((res) => {
//         console.log(res)
//         this.setState({ products: res.data, loading: false })
//       })
//       .catch((err) => {
//         this.setState({ error: err, loading: false })
//       })
//   }

//   render () {
//     if (this.state.products === null) {
//       return 'loading...'
//     }
//     // variable to save array.map()
//     if (this.products === null) {
//       ;<h3>No product</h3>
//     }
//     const productJsx = this.state.products.map((product) => (

//     ))
//     return <div> {productJsx}</div>
//   }
// }
// export default withRouter(CartPage)
