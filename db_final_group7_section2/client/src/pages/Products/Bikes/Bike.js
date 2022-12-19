import React from 'react'
import './bike.css'


const Bike = ({bike}) => {
  //ma elo aaze hal file
  //ma elo aaze hal file
  //ma elo aaze hal file
  //ma elo aaze hal file

  return (
    <article className='bike' onMouseOver={() => console.log('sup')}>
      <div>
        <img
          src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
        <h2>{bike.Product_Name}</h2>
        <h4>{bike.Product_description}</h4> 
        <h3>{bike.price} $</h3>
      </div>
      <button type='button'>reference example</button>
      <button type='button'>Add to Cart</button>
    </article>
  )
}

export default Bike   //ma elo aaze hal file//ma elo aaze hal file//ma elo aaze hal file
                //ma elo aaze hal file
