import Axios from 'axios'

import { Routes, Route, useNavigate } from 'react-router-dom'


import React from 'react'

function HeadBike({list,User_ID}) {
    const navigate = useNavigate()
      const navigateToHome = () => {
        navigate('/SignIn')
      }

  const addToCart = (product_id) => {
    Axios.post('http://localhost:3001/addToCart', {
      Product_ID: product_id,
      User_ID: User_ID,
    }).then(()=>{updatetotal(User_ID)})
  }
  const updatetotal = (user_id) => {
    Axios.post('http://localhost:3001/updatetotal', {
      User_ID: user_id,
    }).then((response) => {})
  }

  return (
    <section className='itemsList'>
      {list.map((bike)=>{
        if (bike.Category_Name === 'bikes' && bike.Discount_Name === null) {
          //to only show bikes
          return (
            <article className='item productitem' >
              <div>
                <img src={bike.img_link} alt='Bike' />
                <h2>{bike.Product_Name}</h2>
                <h4>{bike.Product_description}</h4>
                <h3>{bike.price} $</h3>
              </div>
              <button
                type='button'
                onClick={() => {
                  if (User_ID == null) {
                    navigateToHome()
                    alert('you need to login first')

                  } else {
                    addToCart(bike.Product_ID)
                  }
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          bike.Category_Name === 'bikes' &&
          bike.Discount_name !== null &&
          bike.is_active == 1
        ) {
          //item is on sale
          return (
            <article className='item productitem' >
              <div>
                <img src={bike.img_link} alt='bike' />
                <h2>{bike.Product_Name}</h2>
                <h4>{bike.Product_description}</h4>

                <div class='flex-container'>
                  <div class='flex-child green'>
                    <h3 className='discountedprice'>
                      <del>{bike.price}$</del>
                    </h3>
                  </div>
                  <div class='flex-child magenta'>
                    <h3>
                      {bike.price -
                        (bike.price * bike.Discount_Percentage) / 100}
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
                    addToCart(bike.Product_ID)
                  }
                }}
              >
                Add to Cart
              </button>
            </article>
          )
        } else if (
          bike.Category_Name === 'bikes' &&
          bike.Discount_name !== null &&
          bike.is_active == 0
        ) {

          return (
            <article className='item productitem' >
              <div>
                <img src={bike.img_link} alt='Bike' />
                <h2>{bike.Product_Name}</h2>
                <h4>{bike.Product_description}</h4>
                <h3>{bike.price} $</h3>
              </div>
              <button
                type='button'
                onClick={() => {
                  if (User_ID == null) {
                    navigateToHome()
                    alert('you need to login first')

                  } else {
                    addToCart(bike.Product_ID)
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
 

export default HeadBike




