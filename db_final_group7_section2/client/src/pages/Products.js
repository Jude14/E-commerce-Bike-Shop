import React from 'react'
import HeadBikes from './Products/HeadBikes.js'
import HeadHelmets from './Products/HeadHelmets.js'
import HeadAccessories from './Products/HeadAccessories'
import './Products/products.css'


import { Link } from 'react-scroll'


import { useState ,useEffect} from 'react'
import Axios from 'axios'

const Products = () => {
  const [productsList, setProductsList] = useState([])
  var sessionUser = sessionStorage.getItem('User_ID');

 

  const getProducts = () => {
    Axios.get('http://localhost:3001/gettingproducts').then((response) => {
      setProductsList(response.data) 
    })
 
  }

  useEffect(() => {
    getProducts()
  },[])
    

  return (
    <div onLoad={window.scrollTo(0, 0)}>


      <h1 className='category' id='bik'>
        Bikes
      </h1>
      <HeadBikes list={productsList} User_ID={sessionUser} />

      <h1 className='category' id='hlm'>
        Helmets
      </h1>
      <HeadHelmets list={productsList} User_ID={sessionUser} />

      <h1 className='category' id='acs'>
        Accessories
      </h1>
      <HeadAccessories list={productsList} User_ID={sessionUser} />

    </div>
  )
}

export default Products