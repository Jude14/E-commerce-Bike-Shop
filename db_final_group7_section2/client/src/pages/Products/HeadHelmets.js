import Axios from 'axios'

import { Routes, Route, useNavigate } from 'react-router-dom'


import React from 'react'

function HeadHelmets({ list ,User_ID}) {
    const navigate = useNavigate()
    const navigateToHome = () => {
      navigate('/SignIn')
    }


  const addToCart = (product_id) => {
    Axios.post('http://localhost:3001/addToCart', {
      Product_ID: product_id,
      User_ID: User_ID,
    }).then()
  }
  return (
    <section className='itemsList'>
      {list.map((helmet) => {
        if (helmet.Category_Name === 'helmets' && helmet.Discount_Name === null) {
          //to only show helmets
          return (
            <article className='item productitem' >
              <div>
                <img src={helmet.img_link} alt='helmet' />
                <h2>{helmet.Product_Name}</h2>
                <h4>{helmet.Product_description}</h4>
                <h3>{helmet.price} $</h3>
              </div>
              <button
                type='button'
                onClick={() => {
                  if (User_ID == null) {
                    navigateToHome()
                    alert('you need to login first')

                  } else {
                    addToCart(helmet.Product_ID)
                  }
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          helmet.Category_Name === 'helmets' &&
          helmet.Discount_name !== null &&
          helmet.is_active == 1
        ) {
          //item is on sale

          return (
            <article className='item productitem' >
              <div>
                <img src={helmet.img_link} alt='helmet' />
                <h2>{helmet.Product_Name}</h2>
                <h4>{helmet.Product_description}</h4>

                <div class='flex-container'>
                  <div class='flex-child green'>
                    <h3 className='discountedprice'>
                      <del>{helmet.price}$</del>
                    </h3>
                  </div>
                  <div class='flex-child magenta'>
                    <h3>
                      {helmet.price -
                        (helmet.price * helmet.Discount_Percentage) / 100}
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
                    addToCart(helmet.Product_ID)
                  }
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          helmet.Category_Name === 'helmets' &&
          helmet.Discount_name !== null &&
          helmet.is_active == 0
        ) {

          return (
            <article className='item productitem' >
              <div>
                <img src={helmet.img_link} alt='helmet' />
                <h2>{helmet.Product_Name}</h2>
                <h4>{helmet.Product_description}</h4>
                <h3>{helmet.price} $</h3>
              </div>
              <button
                type='button'
                onClick={() => {
                  if (User_ID == null) {
                    navigateToHome()
                    alert('you need to login first')

                  } else {
                    addToCart(helmet.Product_ID)
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

export default HeadHelmets
