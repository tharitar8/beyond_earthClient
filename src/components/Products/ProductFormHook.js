// import React, { useState, useEffect } from 'react'
// import { withRouter, Link } from 'react-router-dom'
// import { Card } from 'react-bootstrap'
// import { viewProducts } from '../../api/product'
// import Rating from './Rating'
// import { Container } from 'semantic-ui-react'
// import products from '../../products'

// const Products = (props) => {
//   const [product, setProduct] = useState(null)

//   useEffect(() => {
//     viewProducts(props.match.params.id)
//       .then((res) => setProduct(res.data.product))
//       .catch(console.error)
//   }, [])
//   if (!product) {
//     return <p>Loading...</p>
//   }

//   const productList = products.map((product) => (
//     <Container key={product._id}>
//       <Card className='my-3 p-3 rounded'>
//         <Link to={`/products/${product._id}`}>
//           <Card.Img src={product.image} />
//         </Link>

//         <Card.Body>
//           <Link to={`/products/${product._id}`}>
//             <Card.Title as='div'>
//               <strong>{product.name}</strong>
//             </Card.Title>
//           </Link>
//           <Card.Text as='div'>
//             <div className='my-3'>
//               <Rating
//                 value={product.rating}
//                 text={`${product.numReviews} reviews`}
//                 color={'gold'}
//               />
//             </div>
//           </Card.Text>

//           <Card.Text as='h3'>${product.price}</Card.Text>
//         </Card.Body>
//       </Card>
//     </Container>
//   ))
//   return { productList }
// }
// export default withRouter(Products)
