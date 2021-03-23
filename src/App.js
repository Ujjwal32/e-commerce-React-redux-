// import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import SingleProductPage from "./components/SingleProductPage";
import Cart from './components/cart'
import Header from './components/Header';
import FilteredProducts from "./components/FilteredProducts";
import CheckoutProducts from "./components/CheckoutProducts";
// // import s20 from './images/s20.jpg'
// import {addToCart} from './features/cartSlice'
// import { useState } from 'react';
// import Cart from './components/cart';

function App() {
  // const [state, setstate] = useState(false)
  // const  dispatch = useDispatch()
  // const showCart = e => {
  //   setstate(!state)
  // }

  // const addCart = e => {
  //   const id = Number(e.target.parentNode.parentNode.getAttribute('data-id'))
  //   console.log(id)
  //   console.log('added to cart')
  //   const parentCard = e.target.parentNode.parentNode.parentNode
  //   const thumbnail = parentCard.children[0].children[0].src
  //   const detail = parentCard.children[1].children;
  //   const title = detail[0].textContent;
  //   const price = e.target.previousSibling.textContent;
  //   const quantity = 1;
  //   dispatch(addToCart({thumbnail,title,price,id,quantity,unitCost: price}))
  // }
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Header showHero={true} showNavigation={true} anotherClass = ''/>
          <Products />
        </Route>
        <Route exact path='/products/:slug' component={SingleProductPage} />
        <Route path='/cart/' component={Cart} />
        <Route path='/products/category/:slug' component={FilteredProducts} />
        <Route path='/checkout' component={CheckoutProducts} />
        <Route path='/buynow/:slug' component={CheckoutProducts} />
      </Switch>
    </Router>
  );
}

export default App;
