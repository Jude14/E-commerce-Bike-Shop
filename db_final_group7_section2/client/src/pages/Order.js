import React from 'react'

import './Products/products.css'
import '../css/order.css'

import { useState, useEffect } from 'react'
import Axios from 'axios'

import { Link } from 'react-router-dom'


const Order = () => {

  var sessionUser = sessionStorage.getItem('User_ID');
  var orderid=0;
  console.log('sessssssssssssionnnnnnn ussssssssser'+sessionUser)
  const [orderList, setOrderList] = useState([])

  const getorderid = ()=>{//hay beeteid ma ela aaze
    Axios.post('http://localhost:3001/getorderid',{User_ID:sessionUser}).then((response)=>{
      //response
      orderid=response.data[0]['myorder'];
      console.log(response.data[0]['myorder'])
      console.log('resssponseee:' + JSON.stringify(response.data))
      console.log('lkjhgfds')
      getorderitems(response.data[0]['myorder'])
      
    })
  }
  var total=0;
  const getorderitems = (ordernb) =>{
    console.log('uuuuuuuuuuuuuuuuuuuuuuuuuu'+ordernb);
    Axios.post('http://localhost:3001/getorderitems',{order_id:ordernb}).then((response)=>{
      setOrderList(response.data);
      console.log(response.data);
    })
  }
    useEffect(() => {
      getorderid();
    }, [])
  return (
    <div className='orderpage'>
      <h1 className='tomid'>Order Successful</h1>
      <h2>Thank you for shopping from our shop</h2>
      <h3>Order will be delivered in 3-5 business days</h3>

      <div className='cart'>
        {
          //total=0;
          orderList.map((item) => {
            console.log(item.Discount_Name+'ffffffffffffffffffffffffffffffffffff')
            console.log('ffffffffffffffffffffffffffffffffffff')
            if (
              item.Discount_Name === null ||
              (item.Discount_Name != null && item.is_active == 0)
            ) {
              console.log('gggggggggggggggggggggggggggggg')
              total += item.price * item.qty
              return (
                <article
                  className='item cartitem'
                  onMouseOver={() => console.log('sup')}
                >
                  <div>
                    <img src={item.img_link} alt='Bike' />
                    <h2>{item.Product_Name}</h2>

                    <h4>{item.Product_description}</h4>
                    <h3>{item.price} $</h3>
                  </div>

                  <span class='qtyAmount' id='numberOfPeople'>Quantity:
                    {item.qty}
                  </span>

                </article>
              )
            } else if (item.Discount_Name !== null && item.is_active == 1) {
              total +=
                (item.price - (item.price * item.Discount_Percentage) / 100) *
                item.qty
              return (
                <article
                  className='item cartitem'
                  onMouseOver={() => console.log('sup')}
                >
                  <div>
                    
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
                  <span class='qtyAmount' id='numberOfPeople'>Quantity
                    {item.qty}
                  </span>
                </article>
              )
            }
          })
        }
        <h1 className=''>Total: {total}$</h1>
        </div>
      <button>
        <Link to='/home'>Back to Home</Link>
      </button>
    </div>
  )
}

export default Order