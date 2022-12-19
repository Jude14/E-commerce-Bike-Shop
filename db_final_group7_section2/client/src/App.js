
import Navbar from './Navbar'

import About from './pages/About'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Onsale from './pages/Onsale'
import Products from './pages/Products'
import SignIn from './pages/SignIn'
import Order from './pages/Order'
import Admin from './pages/Admin'

import {Route,Routes} from 'react-router-dom'

function App() {

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/order' element={<Order />}></Route>
          
          <Route path='/home' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route
            path='/products#bikerelocate'
            element={<Products loc='helmets' />}
          ></Route>
          <Route path='/onsale' element={<Onsale />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
