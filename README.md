<img src="https://i.imgur.com/T63cfTh.png" width="80" height="80" />
<h1> :ringed_planet:   Beyond Earth Ecommerce Website With Django + React</h1>

   E-commerce is the buying and selling of good or services via the internet, 
and the transfer of money and data to complete the sales. 
The website has created implements all of these options in which you can buy tickets to the moon and beyond. 
The whole ideal was to create a fictional website that would be focused in the future when space travel is possible. 
Using an E-commerce website to reflect the buying of the most exclusive tickets
Also can get which will make it possible for anyone with enough money to be able to visit the moon and beyond. 

## :flying_saucer: Download & Setup Instructions
- Clone project: git clone https://github.com/tharitar8/beyond_earthClient
- Run "npm install" to install dependencies
- Run "npm start" to run development server

## :flying_saucer: Important Links
- <a href="https://tharitar8.github.io/beyond_earthClient/">Deployed Client </a>
- <a href="https://github.com/tharitar8/beyond_earthAPI">API Repo </a>
- <a href="https://earthpluto.herokuapp.com/"> Deployed API </a>

## :rocket: User Stories
- [x] As an unregistered user, I would like to sign up with email and password.
- [x] As a registered user, I would like to sign in with email and password.
- [x] As a signed in user, I would like to change password.
- [x] As a signed in user, I would like to sign out.
- [x] As an unregistered user, I would like to see all of the products.
- [x] As a signed in user, I would like to add and remove products from a shopping cart.

## :flying_saucer: Technologies USED
- Javascripts
- React
- HTML/CSS
- Bootstrap

## :flying_saucer: Future Planning
- [ ] User be able to checkout
- [ ] User be able to see images and reviews
- [ ] User able to Rate each service or vote best company transportation
- [ ] User able to see temperature each places

## :flying_saucer: Wireframes

<img src="https://i.imgur.com/EKZACOj.png" />

## :rocket: ERD

<img src="https://i.imgur.com/lSrYWeV.jpg" />

## :rocket: USER PATHS & METHODS
<table>
  <tr>
    <th>Endpoint</th>
    <th>Method</th>
  </tr>
  <tr>
    <td>/sign-up</td>
    <td>POST</td>
  </tr>
  <tr>
    <td>/sign-in</td>
    <td>POST</td>
  </tr>
  <tr>
    <td>/change-password</td>
    <td>PATCH</td>
  </tr>
  <tr>
    <td>/sign-out</td>
    <td>DELETE</td>
  </tr>
</table>

## :rocket: WEBSITE PATHS & METHODS
<table>
  <tr>
    <th>Endpoint</th>
    <th>Method</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>/products</td>
    <td>GET</td>
    <td>show all tickets</td>
  </tr>
  <tr>
    <td>/orders</td>
    <td>POST</td>
    <td>create an orderId when sign-in</td>
  </tr>
  <tr>
    <td>/product/:id</td>
    <td>GET</td>
    <td>Show Info for single ticket</td>
  </tr>
  <tr>
    <td> `/order/${order.id}/product/${product.id}/`</td>
    <td>PATCH</td>
    <td>Update an order when add to cart</td>
  </tr>
  <tr>
    <td> /order/:id</td>
    <td>GET</td>
    <td>Show all tickets been add to cart</td>
  </tr>
   <tr>
    <td> /order/:id</td>
    <td>PATCH</td>
    <td>Update an order by remove each</td>
  </tr>
  <tr>
    <td> /order/:id</td>
    <td>DELETE</td>
    <td>Delete all in order</td>
  </tr>
</table>



