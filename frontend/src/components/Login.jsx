import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Login() {

  const [user, setuser] = useState({
    username:"",
    password:"",
    })

  const onSumbitHandeler = (e) => {
    e.preventDefault();
    console.log(user);
    setuser({
      username:"",
      password:"",
      })
  }
  
  return (
    <div className='mx-auto min-w-96'>
      <div className='w-full p-6 bg-gray-100 border border-gray-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10' >
      <h1 className='text-3xl font-bold text-center text-white'> Login</h1>
       <form onSubmit={onSumbitHandeler} className='my-5'>
           
          <div className='my-2'>
            <label className='p-2 lable'>
              <span className='text-base lable-text'>
                Username
              </span>
            </label>
            <input value={user.username} onChange={(e)=>setuser({...user,username:e.target.value})} className='w-full h-10 rounded-lg input-bordered' type='text' placeholder=' Enter Username'></input>
          </div>
          <div className='my-2'>
            <label className='p-2 lable' id='a'>
              <span className='text-base lable-text'>
                Password
              </span>
            </label>
            <input value={user.password} onChange={(e)=>setuser({...user,password:e.target.value})} className='w-full h-10 rounded-lg input-bordered' type='password' placeholder=' Password'/>
          </div>
          
            <p className='my-2 text-center'> You don't have an account ? 
            <Link to='/register' className='text-blue-200'> Sigup</Link>
            </p>
           <div className='flex items-center' >
            <button type='submit' className="w-full my-2 btn btn-active "> Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
