import React from 'react'
import HeadBikes from './Products/HeadBikes.js'
import HeadHelmets from './Products/HeadHelmets.js'
import HeadAccessories from './Products/HeadAccessories'


import { useState, useEffect } from 'react'
import Axios from 'axios'


const Onsale = () => {
  const [productsList, setProductsList] = useState([]);
  var sessionUser = sessionStorage.getItem('User_ID')

  
  
  const getProductsOnSale = () => {
    Axios.get('http://localhost:3001/gettingproductsonsale').then((response) => {
      setProductsList(response.data); //in my response, look at status it should be 200 and my information is inside of data     
    })
    console.log('proooooducttttttttt')
    console.log(productsList)
  }
  
  for (var i = 0; i < productsList.length; i++) {
    if(productsList[i].Discount_Name==null){
      productsList.splice(i);
    }

  }


  useEffect(() => {
    getProductsOnSale();

  }, [])

  return (
    <div onLoad={window.scrollTo(0, 0)}>
      <h1 className='category'>Bikes</h1>
      <HeadBikes list={productsList} User_ID={sessionUser} />
      <h1 className='category'>Helmets</h1>
      <HeadHelmets list={productsList} User_ID={sessionUser} />
      <h1 className='category'>Accessories</h1>
      <HeadAccessories list={productsList} User_ID={sessionUser} />

    </div>
  )
}

export default Onsale



