import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import { CartContext } from './CartContext'
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { useState } from 'react';



function App() {
  const[cartItems,setCartItems] = useState([])

  return (
    <BrowserRouter>
    <CartContext.Provider value = {{cartItems, setCartItems}}>

      <Link to = "/checkout">購物車</Link>
      <Link to = '/'> 首頁</Link>

      <Routes>
        <Route path='/' element = {<ProductList/>} />
        <Route path='/checkout' element = {<Checkout/>} />
        <Route path='/product' element = {<ProductDetail/>} >
            <Route path=':id' element = {<ProductDetail/>}/>
        </Route>
        <Route path='*'element= {<p>Cant Found Page</p>}/>
    </Routes> 
    
    </CartContext.Provider>

    </BrowserRouter>
  );
}

export default App;