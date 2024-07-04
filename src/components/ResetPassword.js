import React from 'react'
import '../App.css'
import Axios from 'axios'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams} from 'react-router-dom';


const ResetPassword= () => {
    const [password, setPassword] = useState('')
    const {token}=useParams()

    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/reset-password/'+token, { password, })
        .then(response=>{
            if(response.data.status){
                navigate('/login')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className='sign-up-container'>
            <h2>Reset Password</h2>
            <form className='sign-up-form' onSubmit={handleSubmit}>
               
              
                <label htmlFor="password">New Password:</label>
                <input type="password" placeholder='********'
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Reset</button>
            </form>
        </div>
    )
}

export default ResetPassword;
