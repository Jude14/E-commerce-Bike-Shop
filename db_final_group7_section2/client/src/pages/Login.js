import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Home from './Home'
import '../css/signin.css'
import { Routes, Route, useNavigate } from 'react-router-dom'

export const Login = (props) => {
  const navigate = useNavigate()
  const [emailLog, setEmailLog] = useState('')
  const [passLog, setPassLog] = useState('')
  //const [LoginStatus, setLoginStatus] = useState('')
  const [user_ID, setUser_ID] = useState(0)
  const win = window.sessionStorage
  function refreshPage() {
    window.location.reload(false)
  }

  Axios.defaults.withCredentials = true // in order to make the session work in our front-end
  const navigateToHome = () => {
    navigate('/home')
  }
  const navigateAdmin = () => {
    navigate('/Admin')
  }

 const SignIn = () => {
   Axios.post('http://localhost:3001/login', {
     email: emailLog,
     pass: passLog,
   }).then((response) => {
     if (response.data.message) {
      // setLoginStatus(response.data.message)
     } else {
       //setLoginStatus(response.data[0].username)
       localStorage.setItem('user_ID', response.data[0].user_ID)
       win.setItem('User_ID', response.data[0].user_ID)


       if (response.data[0].user_ID == 15) {
         navigateAdmin()
       } else {
         navigateToHome()
       }

       refreshPage()
     }
   })
 }
 const handleSubmit = (e) => {
   e.preventDefault()
   //console.log(emailLog)
 }
 Axios.defaults.withCredentials = true
 useEffect(() => {
   Axios.get('http://localhost:3001/login').then((response) => {
     if (response.data.loggedIn == true) {
       //setLoginStatus(response.data.user[0].username)
     }

    // console.log(sessionStorage.getItem('User_ID'))
   })
 }, [])
 return (
   <div className='auth-form-container'>

     <h2 className='sign'>Login</h2>
     <form className='login-form' onSubmit={handleSubmit}>
       <label className='signlbl' for='email'>
         email:
       </label>
       <input
         className='signinput'
         onChange={(e) => {
           setEmailLog(e.target.value)
         }}
         type='email'
         id='email'
         required
       />
       <label className='signlbl' for='email'>
         password:
       </label>
       <input
         className='signinput'
         onChange={(e) => {
           setPassLog(e.target.value)
         }}
         type='password'
         id='password'
         required
       />
       <button className='sign-btn' onClick={SignIn}>
         Login
       </button>
     </form>

     <button
       className='link-btn sign-btn'
       onClick={() => props.onFormSwitch('register')}
     >
       Don't have an accoount? Register here
     </button>

     <Routes>
       <Route path='/Home' element={<Home />} />
     </Routes>
   </div>
 )
}
export default Login
