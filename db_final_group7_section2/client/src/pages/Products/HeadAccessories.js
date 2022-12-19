import Axios from 'axios'

import { Routes, Route, useNavigate } from 'react-router-dom'


import React from 'react'

function HeadAccessories({ list,User_ID }) {
    const navigate = useNavigate()
    const navigateToHome = () => {
      navigate('/SignIn')
    }



  
  const addToCart = (product_id) => {
    Axios.post('http://localhost:3001/addToCart', {
      Product_ID: product_id,
      User_ID: User_ID,
    }).then(
      
      )
  }

  return (
    <section className='itemsList'>
      {list.map((accessory) => {
        if (
          accessory.Category_Name === 'accessories' &&
          accessory.Discount_Name === null
        ) {

          return (
            <article className='item productitem' >
              <div>
                <img src={accessory.img_link} alt='accessory' />
                <h2>{accessory.Product_Name}</h2>
                <h4>{accessory.Product_description}</h4>
                <h3>{accessory.price} $</h3>
              </div>
              <button
                type='button'
                onClick={() => {
                  if (User_ID == null) {
                    navigateToHome()
                    alert('you need to login first')

                  } else {
                    addToCart(accessory.Product_ID)
                  }
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          accessory.Category_Name === 'accessories' &&
          accessory.Discount_name !== null &&
          accessory.is_active == 1
        ) {
          return (
            <article className='item productitem' >
              <div>
                <img src={accessory.img_link} alt='accessory' />
                <h2>{accessory.Product_Name}</h2>
                <h4>{accessory.Product_description}</h4>

                <div class='flex-container'>
                  <div class='flex-child green'>
                    <h3 className='discountedprice'>
                      <del>{accessory.price}$</del>
                    </h3>
                  </div>
                  <div class='flex-child magenta'>
                    <h3>
                      {accessory.price -
                        (accessory.price * accessory.Discount_Percentage) / 100}
                      $
                    </h3>
                  </div>
                </div>
              </div>
              <button
                type='button'
                onClick={() => {
                  if (User_ID == null) {
                    navigateToHome()
                    alert('you need to login first')
                  } else {
                    addToCart(accessory.Product_ID)
                  }
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          accessory.Category_Name === 'accessories' &&
          accessory.Discount_name !== null &&
          accessory.is_active == 0
        ) {
          //item is on sale
          return (
            <article className='item productitem' >
              <div>
                <img src={accessory.img_link} alt='accessory' />
                <h2>{accessory.Product_Name}</h2>
                <h4>{accessory.Product_description}</h4>
                <h3>{accessory.price} $</h3>
              </div>
              <button
                type='button'
                onClick={() => {
                  if (User_ID == null) {
                    navigateToHome()
                    alert('you need to login first')

                  } else {
                    addToCart(accessory.Product_ID)
                  }
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        }
      })}
    </section>
  )
}

export default HeadAccessories
