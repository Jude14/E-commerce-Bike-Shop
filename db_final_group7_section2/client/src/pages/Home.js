import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
 
  return (
    <div className='home' onLoad={window.scrollTo(0, 0)}>
      <div className='slogan'>
        <img
          className='bgpic'
          src={require('../pictures/bike-bg4.jpg')}
          alt=''
        />
        <h1 className='slogansentence'>Seek New Challenges</h1>
      </div>

      <div className='bikeGreeting'>
        <h1 className='bikestc'>Choose the bike that fits your preferences</h1>
        <img
          className='categpic'
          src={require('../pictures/bike.jpg')}
          alt=''
        />
        <button className='forhomebtn'>
          <Link to='/products' id='abc' className='clrwhite'>
            Shop Bikes Now
          </Link>
        </button>
      </div>

      <div className='helmetGreeting'>
        <h1 className='helmetstc'>
          Safety is a necessaty, protect your self with our high quality helmets
        </h1>
        <img
          className='categpic'
          src={require('../pictures/helm.jpg')}
          alt=''
        />
        <button className='forhomebtn'>
          <Link to='/products' className='clrwhite'>
            Shop Helmets Now
          </Link>
        </button>
      </div>

      <div className='accessoryGreeting'>
        <h1 className='accessorystc'>
          Don't miss out on our revolutionary accessories
        </h1>
        <img className='categpic' src={require('../pictures/acs.jpg')} alt='' />
        <button className='forhomebtn'>
          <Link to='/products' className='clrwhite'>
            Shop Accessories Now
          </Link>
        </button>
      </div>

      <div className='saleGreeting'>
        <h1 className='salestc'>Take a look at our greatest deals</h1>
        <img
          className='categpic'
          src={require('../pictures/salepic.jpg')}
          alt=''
        />
        <button className='forhomebtn'>
          <Link to='/onsale' className='clrwhite'>
            Get Items On Sale
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Home