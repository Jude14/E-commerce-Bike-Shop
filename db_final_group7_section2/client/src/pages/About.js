import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { createBrowserHistory } from '@remix-run/router'
import '../css/about.css'

const About = () => {
  const [Tryy, setTryy] = useState('')

  Axios.defaults.withCredentials = true
  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn == true) {
        //console.log(response.data.user_ID+'ggggggg');
        setTryy(response.data.user[0].user_ID)
      }
    })
  }, [])

  const cb = document.querySelector('#accept')
  //console.log(cb.checked)
  if (createBrowserHistory.checked) {
    console.log('asd')
  }
  return (
    /*
<div className = 'about'>
      <div className='aboutslogan'><img className='aboutpic' src={require("../pictures/about.jpg")} alt="" />
        <h1 className='slogansentence'>About US</h1>
      </div>
      <h1>{Tryy +'g'}</h1>
      <h1>test</h1></div>*/
    <div className='about' onLoad={window.scrollTo(0, 0)}>
      <div className='slogan'>
        <img
          className='bgpic'
          src={require('../pictures/bike-bg3.jpeg')}
          alt=''
        />
        <h1 className='slogansentence'>About Us</h1>
      </div>
      <div className='about2'>
        <h1 className='sentence2'>"Find Everything You Need & More"</h1>
        <p>Our Shop offers the best deals on bikes & accessories.</p>
        <p>
          We will deliver your order on your doorstep! With only one click,
          place your order now.
        </p>
      </div>
      <div className='footer'>
        <div className='footer1'>
          <img
            className='lebpic'
            src={require('../pictures/lebanon.jpeg')}
            alt=''
          />
          <h2 className='footer1sub1'>Lebanon</h2>
          <p2 className='footer1sub2'>
            Lebanon represents our main shop, where we originally began{' '}
          </p2>
          <p2 className='footer1sub3'>
            Originally started by Mr.Zakhia Tayeh, who soon sold half the shop
            to{' '}
          </p2>
          <p2 className='footer1sub4'>
            Mr. Jude Soueid in 1990, the co-founder of PedalNation
          </p2>
        </div>

        <div className='footer2'>
          <img
            className='italypic'
            src={require('../pictures/italy.jpeg')}
            alt=''
          />
          <h2 className='footer2sub1'>Italy</h2>
          <p2 className='footer2sub2'>
            Our Second Shop is located in Italy, Roma.{' '}
          </p2>
          <p2 className='footer2sub3'>
            Managed by the shop's third and newest partner{' '}
          </p2>
          <p2 className='footer2sub4'>Mr. Anthony Fadel since 2010.</p2>
        </div>
      </div>

      <body>
        <div class='footer-dark'>
          <footer>
            <div class='container'>
              <div class='row'>
                <div class='one'>
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a href='#one'>Bikes</a>
                    </li>
                    <li>
                      <a href='#one'>Bike Accessories</a>
                    </li>
                    <li>
                      <a href='#one'>maintenance</a>
                    </li>
                  </ul>
                </div>
                <div class='two'>
                  <h3>Contact</h3>
                  <ul>
                    <li>
                      <a href='#Contact'>Phone: 71174172</a>
                    </li>
                    <li>
                      <a href='#Contact'>Email: Bike01.Shop01@hotmail.com</a>
                    </li>
                    <li>
                      <a href='#Contact'>instagram: @Bike01.Shop01</a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class='copyright'>
                <p className='blogo1'>Pedal</p>
                <p className='blogo2'>Nation</p> © 2022
              </p>
            </div>
          </footer>
        </div>
      </body>
    </div>
  )
}

export default About
