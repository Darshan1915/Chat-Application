import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Signup() {
  const [user, setuser] = useState({
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    // gender:"",
  })
  // const handleCheckBox = (gender)=>{
  //   setuser(...user, gender )
  // }
  const onSumbitHandeler = (e) => {
    e.preventDefault();
    console.log(user);
    setuser({
      fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    })
  }
  return (
    <div className='mx-auto min-w-96'>
      <div className='w-full p-6 bg-gray-100 border border-gray-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10' >
      <h1 className='text-3xl font-bold text-center text-white'>Signup</h1>
       <form onSubmit={onSumbitHandeler}>
          <div className='my-2'>
            <label className='p-2 lable'>
              <span className='text-base lable-text'>
                Full Name
              </span>
            </label>
            <input value={user.fullname} onChange={(e)=>setuser({...user,fullname:e.target.value})} className='w-full h-10 rounded-lg input-bordered' type='text' placeholder=' Enter Your Full Name'></input>
          </div>
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
          <div className='my-2'>
            <label className='p-2 lable'>
              <span className='text-base lable-text'>
                Confirm Password
              </span>
            </label>
            <input value={user.confirmPassword} onChange={(e)=>setuser({...user,confirmPassword:e.target.value})} className='w-full h-10 rounded-lg input-bordered' type='password' placeholder=' Confirm Password'/>
          </div>
          {/* <div className='flex my-4'>
            <div className='flex '>
            <p>Male : </p>
            <input checked={user.gender==="male"} onChange={()=>handleCheckBox("male")}   type="checkbox" defaultChecked className="checkbox" />
            </div>
           <div className='flex '>
           <p> Female : </p>
           <input checked={user.gender==="female"} onChange={()=>handleCheckBox("female")}   type="checkbox" defaultChecked className="checkbox" />
           </div>
          </div > */}
            <p className='text-center'>Already have an account ? 
            <Link to='/login' className='text-blue-200'> Login</Link>
            </p>
           <div className='flex items-center' >
            <button type='submit' className="w-full my-2 -10 btn btn-active ">Signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
