import Register from './Register'
import Login from './Login'

import { useState } from 'react'

function SignIn() {
  const [currentForm, setCurrentForm] = useState('Login')
  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className='SignIn'>
      {currentForm === 'Login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  )
}

export default SignIn
