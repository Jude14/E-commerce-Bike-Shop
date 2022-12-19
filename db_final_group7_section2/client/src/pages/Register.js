import React, { useState } from 'react'
import Axios from 'axios'
import '../css/signin.css'

import { Routes, Route, useNavigate } from 'react-router-dom'

export const Register = (props) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [first_name, setfirst_Name] = useState('')
  const [last_name, setlast_Name] = useState('')
  const [userName, setuserName] = useState('')
  const [Phone, setPhone] = useState('')

  const [governate, setGovernate] = useState('')
  const [city, setCity] = useState('')
  const [floorNB, setfloorNB] = useState('')
  const [PhoneHome, setPhoneHome] = useState('')
  const [address_line1, setAddrress_line1] = useState('')
  
  const [governate2, setGovernate2] = useState('')
  const [city2, setCity2] = useState('')
  const [floorNB2, setfloorNB2] = useState('')
  const [PhoneWork, setPhoneWork] = useState('')
  const [address_line12, setAddrress_line12] = useState('')

  const navigate = useNavigate()

  const navigateToSignIn = () => {
    props.onFormSwitch('Login')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const register = () => {
    Axios.post('http://localhost:3001/register', {
      email: email,
      pass: pass,
      first_name: first_name,
      last_name: last_name,
      Phone: Phone,
      userName: userName,
    }).then((response) => {
      //console.log(response)
      Axios.post('http://localhost:3001/registerAdd', {
      governate : governate,
      city : city,
      floorNB : floorNB,
      PhoneHome : PhoneHome,
      address_line1 : address_line1

    }).then((response) => {
      //console.log(response)
      navigateToSignIn()
    })
    Axios.post('http://localhost:3001/registerAdd2', {
      governate2 : governate2,
      city2 : city2,
      floorNB2 : floorNB2,
      PhoneWork : PhoneWork,
      address_line12 : address_line12

    }).then((response) => {
      //console.log(response)
      navigateToSignIn()
    })
      
    })

    Axios.post('http://localhost:3001/addcart', {}).then((response) => {
      //console.log(response)
    })
  }
  return (
    <div clasName='auth-form-container'>
      <h2>Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <label className='signlbl' htmlfor='name'>
          UserName:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setuserName(e.target.value)
          }}
          value={userName}
          type='text'
          id='name'
          required
        />
        <label className='signlbl' htmlfor='email'>
          email:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
          type='email'
          id='email'
          required
        />
        <label className='signlbl' htmlfor='pass'>
          password:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setPass(e.target.value)
          }}
          value={pass}
          id='password'
          required
        />

        <label className='signlbl' htmlfor='name'>
          First Name:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setfirst_Name(e.target.value)
          }}
          value={first_name}
          type='text'
          id='name'
          required
        />

        <label className='signlbl' htmlfor='name'>
          Last Name:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setlast_Name(e.target.value)
          }}
          value={last_name}
          type='text'
          id='name'
          required
        />
        <label className='signlbl' htmlfor='name'>
          Phone Number:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setPhone(e.target.value)
          }}
          value={Phone}
          id='name'
          type='text'
          required
        />
        <label className='signlbl tomid' htmlfor='name'>
          Home Address:
        </label>
        <label className='signlbl' htmlfor='name'>
          Governate :
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setGovernate(e.target.value)
          }}
          value={governate}
          type='text'
          id='name'
          required
        />
        <label className='signlbl' htmlfor='name'>
          City :
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setCity(e.target.value)
          }}
          value={city}
          type='text'
          id='name'
          required
        />
        <label className='signlbl' htmlfor='name'>
          floorNB :
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setfloorNB(e.target.value)
          }}
          value={floorNB}
          type='number'
          id='name'
          required
        />
        <label className='signlbl' htmlfor='name'>
          Home Phone Number :
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setPhoneHome(e.target.value)
          }}
          value={PhoneHome}
          type='text'
          id='name'
          required
        />
        <label className='signlbl' htmlfor='name'>
          Address_Line:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setAddrress_line1(e.target.value)
          }}
          value={address_line1}
          type='text'
          id='name'
          required
        />
        <label className='signlbl tomid' htmlfor='name'>
          Work Address:
        </label>
        <label className='signlbl' htmlfor='name'>
          Governate :
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setGovernate2(e.target.value)
          }}
          value={governate2}
          type='text'
          id='name'
          required
        />
        <label className='signlbl' htmlfor='name'>
          City :
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setCity2(e.target.value)
          }}
          value={city2}
          type='text'
          id='name'
          required
        />
        <label className='signlbl' htmlfor='name'>
          floorNB :
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setfloorNB2(e.target.value)
          }}
          value={floorNB2}
          type='number'
          id='name'
          required
        />
        <label className='signlbl' htmlfor='name'>
          Work Phone Number :
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setPhoneWork(e.target.value)
          }}
          value={PhoneWork}
          type='text'
          id='name'
          required
        />
        <label className='signlbl' htmlfor='name'>
          Address_Line:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setAddrress_line12(e.target.value)
          }}
          value={address_line12}
          type='text'
          id='name'
          required
        />

        <button className='sign-btn' onClick={register} type='submit'>
          Register
        </button>
      </form>

      <button
        className='link-btn sign-btn'
        onClick={() => props.onFormSwitch('Login')}
      >
        Already have an accoount? Login here
      </button>
    </div>
  )
}
export default Register
