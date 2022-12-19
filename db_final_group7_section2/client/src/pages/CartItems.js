//import './products.css'

import React from 'react'
//import ReactDom from 'react-dom'

function CartItem({list}) {
  //const toReturn = list.map((bike) => (<Bike key={bike.Product_ID} bike={bike} />))
  //')
  return (
    <section className='cartList'>
      {list.map((bike)=>{//bike
        console.log(bike);
       /* if (bike.Category_ID === 1 && bike.Discount_Name===null) {//&& bike.Discount_Name===null*/
          //to only show bikes without discount
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={bike.img_link} alt='Bike' />
                <h2>{bike.Product_Name}</h2>
                <h3>{bike.price} $</h3>
                <h1>ggg</h1>
              </div>
              <button type='button'>Bike Cart</button>
            </article>
          )
        }
      /*  else if(bike.Category_ID===1 && bike.Discount_name!==null && bike.is_active==1){//&& bike.is_active==1
          //item is on sale
          //console.log(bike);
          //console.log(bike.Category_ID);
          //console.log(bike);
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={bike.img_link} alt='bike' />
                <h2>{bike.Product_Name}</h2>

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
              <button type='button'>Add to Cart</button>
            </article>
          )
          
        }


      })}
      {list.map((helmet) => {
        console.log(helmet)//helmet
        if (helmet.Category_ID === 2 ) {
          //to only show helmets
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={helmet.img_link} alt='helmet' />
                <h2>{helmet.Product_Name}</h2>
                <h3>{helmet.price} $</h3>
              </div>
              <button type='button'>Helmet Cart</button>
            </article>
          )
        } else if (
          helmet.Category_ID === 2 &&
          helmet.Discount_name !== null &&
          helmet.is_active == 1
        ) {
          //item is on sale
          //console.log(helmet);
          //console.log(helmet.Category_ID);
          //console.log(helmet);
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
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
              <button type='button'>reference example</button>
              <button type='button'>Add to Cart</button>
            </article>
          )
        }
      })}
      {list.map((accessory) => {
        console.log(accessory)
        if (accessory.Category_ID === 3) {
          //to only show accessorys
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
              <div>
                <img src={accessory.img_link} alt='accessory' />
                <h2>{accessory.Product_Name}</h2>
                <h3>{accessory.price} $</h3>
              </div>
              <button type='button'>Add to Cart</button>
            </article>
          )
        } else if (
          accessory.Category_ID === 3 &&
          accessory.Discount_name !== null &&
          accessory.is_active == 1
        ) {
          //item is on sale
          //console.log(accessory);
          //console.log(accessory.Category_ID);
          //console.log(accessory);
          return (
            <article className='item' onMouseOver={() => console.log('sup')}>
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
              <button type='button'>reference example</button>
              <button type='button'>Add to Cart</button>
            </article>
          )
        }
      }*/)
    }
    </section>
  )
}
 

export default CartItem




