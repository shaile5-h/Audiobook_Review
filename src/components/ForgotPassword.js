import React from 'react'
import '../App.css'
import Axios from 'axios'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const navigate=useNavigate()
    Axios.defaults.withCredentials=true;
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/forgot-password', { email, })
        .then(response=>{
            if(response.data.status){
                alert("check your email to reset password link")
                navigate('/login')
            }
            console.log(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <div>
      <div className='sign-up-container'>
            <h2>Forgot Password</h2>
             <form className='sign-up-form' onSubmit={handleSubmit}>
                

                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />


                <button type='submit'>Send</button>
                <p>Recalled the password? <Link to="/login" >Go to Login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword
