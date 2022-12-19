import React from 'react'
import './Products.js'

import './Products/products.css'
import { Link } from 'react-router-dom'

import '../css/cart.css'


import { useState, useEffect } from 'react'
import Axios from 'axios'


const Cart = (props) => {
  var where='home'
  var sessionUser = sessionStorage.getItem('User_ID')
  var address='1';
  const [address2,setaddress2]=useState(0);
  const [list, setList] = useState([])
  var total = 0

  const [orderid,setorderid]=useState('');

  Axios.defaults.withCredentials = true

  const getCartItems = () => {
    Axios.post('http://localhost:3001/productselection', {
      userid: sessionUser, //currentuser
    }).then((response) => {
      console.log('sessionUser' + sessionUser)

      setList(response.data) 
    })

  }

  useEffect(() => {
    getCartItems()
  }, [])

  const orderCart = () => {
    //var order = 0;
    createOrder(address);
    fillOrderProducts();
    deleteoldcart();
    getAddress();
  }
  const getAddress = ()=>{
    Axios.post('http://localhost:3001/getaddress',{User_ID:sessionUser,address:where}).then((response)=>{
      console.log('my addressid: '+response.data[0]['address_id']);
      setaddress2(response.data[0]['address_id']);
      console.log('tnen tnen tnen'+ address2);
    })
  }
  const createOrder = (location)=>{
    console.log('address2222  '+address2)
    Axios.post('http://localhost:3001/createorder',{User_ID:sessionUser,total:total,address_id:location}).then((response)=>{
    })
  }

  const fillOrderProducts = () =>{
    Axios.post('http://localhost:3001/fillorderproducts',{User_ID:sessionUser}).then((response)=>{      
    })
  }
  const deleteoldcart = () =>{
    Axios.post('http://localhost:3001/deleteoldcart',{User_ID:sessionUser}).then((response)=>{
    })
  }



  const deleteCartItem = (Product_ID) => {
    Axios.post('http://localhost:3001/deleteCartItem',{Product_ID:Product_ID,user_id:sessionUser}).then(
      (response) => {
        getCartItems()
        updatetotal(sessionUser)

      }
    )
  }
  const increaseQuantity = (Product_ID,qty) => {
    Axios.post('http://localhost:3001/updateQty',{Product_ID:Product_ID, qty:(qty+1),User_ID:sessionUser}).then((response)=>{
      getCartItems();
      updatetotal(sessionUser)
    })
  }
  const decreaseQuantity = (Product_ID,qty) => {
      Axios.post('http://localhost:3001/updateQty',{Product_ID:Product_ID, qty:(qty-1),User_ID:sessionUser}).then((response)=>{
      getCartItems();
      updatetotal(sessionUser)
    })
  }


  
  const updatetotal = (user_id) => {
    console.log('updatinnnnnn')
    Axios.post('http://localhost:3001/updatetotal', {
      User_ID: user_id,
    }).then((response) => {})
  }
 

  if (list.length == 0) {
    return (
      <div>
        <h1 className='emptyCart'>Cart is still empty</h1>
      </div>
    )
  }

  return (
    <div  className='cart'>

      {
        list.map((item) => {
          if (
            item.Discount_Name === null ||
            (item.Discount_Name != null && item.is_active == 0)
          ) {
            total += item.price * item.qty
            return (
              <article className='item cartitem' onMouseOver={() => console.log('sup')}>
                <div >
                  <img src={item.img_link} alt='Bike' />
                  <h2>{item.Product_Name}</h2>

                  <h4>{item.Product_description}</h4>
                  <h3>{item.price} $</h3>
                </div>

                <span class='buttonContainer'>
                  <button class='splitButton' onClick={() => { increaseQuantity(item.Product_ID, item.qty)}}>
                    <span class='buttonText'>+</span>
                  </button>
                </span>
                <span class='qtyAmount' id='numberOfPeople'>
                  {item.qty}
                </span>
                <span class='buttonContainer'>
                  <button
                    class='splitButton'
                    onClick={() => {
                      if (item.qty != 1) {
                        decreaseQuantity(item.Product_ID, item.qty)
                      }
                    }}
                  >
                    <span class='buttonText'>-</span>
                  </button>
                </span>


                <img  onClick={() => {
                    deleteCartItem(item.Product_ID)
                  }}
                    className='trashcan'
                    src={require('../pictures/trash.png')}
                    alt='trashcan'
                  />
              </article>
            )
          } else if (item.Discount_Name !== null && item.is_active == 1) {
            total +=
              (item.price - (item.price * item.Discount_Percentage) / 100) *
              item.qty
            return (
              <article className='item cartitem' onMouseOver={() => console.log('sup')}>
                <div>
                  {/*<h1>f</h1>*/}
                  <img src={item.img_link} alt='item' />
                  <h2>{item.Product_Name}</h2>
                  <h4>{item.Product_description}</h4>

                  <div class='flex-container'>
                    <div class='flex-child green'>
                      <h3 className='discountedprice tocenter'>
                        <del>{item.price}$</del>
                      </h3>
                    </div>
                    <div class='flex-child magenta'>
                      <h3>
                        {item.price -
                          (item.price * item.Discount_Percentage) / 100}
                        $
                      </h3>
                    </div>
                  </div>
                </div>
                <span class='buttonContainer'>
                  <button
                    class='splitButton'
                    onClick={() => {
                      increaseQuantity(item.Product_ID, item.qty)
                    }}
                  >
                    <span class='buttonText'>+</span>
                  </button>
                </span>
                <span class='qtyAmount' id='numberOfPeople'>
                  {item.qty}
                </span>
                <span class='buttonContainer'>
                  <button
                    class='splitButton'
                    onClick={() => {
                      if (item.qty != 1) {
                        decreaseQuantity(item.Product_ID, item.qty)
                      }
                    }}
                  >
                    <span class='buttonText'>-</span>
                  </button>
                </span>

                  <img onClick={() => {
                    deleteCartItem(item.Product_ID)
                  }}
                    className='trashcan'
                    src={require('../pictures/trash.png')}
                    alt='trashcan'
                  />
              </article>
            )
          }
        })
      }
      <h1 className='totaldesign'>Total: {total}$</h1>

      <div className='deliverylocation'>
        <h4>Choose location</h4>
        <div className='radios'>
          <input type="radio" className='radio' name="location" value="work" onClick={()=>{ where='work'}}/>
          <label for="work" className='deliverytext'>Work</label>
          <input type="radio" className='radio' name="location" value="home" checked onClick={()=>{ where='home'}}/>
          <label for="home" className='deliverytext'>Home</label>
        </div>
      </div>

      <button className='orderbtn smal'
        onClick={() => {
          orderCart() //lamma tekbos order, l echya li lezem taamela btaamela bi ordercart
        }}
      >
        <Link to='/order' className='larger'>Order</Link>
      </button>
    </div>
  )
}

export default Cart
