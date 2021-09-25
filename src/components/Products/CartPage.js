// import React, { Component } from 'react'
// import { showOneOrder } from '../../api/product'

// class CartPage extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       loading: false,
//       products: []
//     }
//   }

//   componentDidMount () {
//     const { user, order, match } = this.props
//     console.log(user, order, match)
//     showOneOrder(user, order, match)
//       .then((res) => {
//         console.log(res)
//         this.setState({ products: res.data })
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
//       <h3>No product</h3>
//     }
//   }
// }
import React from 'react'

function CartPage () {
  return (
    <div>
    test cart page
    </div>
  )
}

export default CartPage

// export default CartPage
