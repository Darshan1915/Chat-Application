// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'


// function Signup() {
//   const [user, setuser] = useState({
//     fullname:"",
//     username:"",
//     password:"",
//     confirmPassword:"",
//     // gender:"",
//   })
//   // const handleCheckBox = (gender)=>{
//   //   setuser(...user, gender )
//   // }
//   const onSumbitHandeler = (e) => {
//     e.preventDefault();
//     // console.log(user);
//     setuser({
//       fullname:"",
//       username:"",
//       password:"",
//       confirmPassword:"",
//     })
//   }
//   return (
//     <div className='mx-auto min-w-96'>
//       <div className='w-full p-6 bg-gray-100 border border-gray-100 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10' >
//       <h1 className='text-3xl font-bold text-center text-white'>Signup</h1>
//        <form onSubmit={onSumbitHandeler}>
//           <div className='my-2'>
//             <label className='p-2 lable'>
//               <span className='text-base lable-text'>
//                 Full Name
//               </span>
//             </label>
//             <input value={user.fullname} onChange={(e)=>setuser({...user,fullname:e.target.value})} className='w-full h-10 rounded-lg input-bordered' type='text' placeholder=' Enter Your Full Name'></input>
//           </div>
//           <div className='my-2'>
//             <label className='p-2 lable'>
//               <span className='text-base lable-text'>
//                 Username
//               </span>
//             </label>
//             <input value={user.username} onChange={(e)=>setuser({...user,username:e.target.value})} className='w-full h-10 rounded-lg input-bordered' type='text' placeholder=' Enter Username'></input>
//           </div>
//           <div className='my-2'>
//             <label className='p-2 lable' id='a'>
//               <span className='text-base lable-text'>
//                 Password
//               </span>
//             </label>
//             <input value={user.password} onChange={(e)=>setuser({...user,password:e.target.value})} className='w-full h-10 rounded-lg input-bordered' type='password' placeholder=' Password'/>
//           </div>
//           <div className='my-2'>
//             <label className='p-2 lable'>
//               <span className='text-base lable-text'>
//                 Confirm Password
//               </span>
//             </label>
//             <input value={user.confirmPassword} onChange={(e)=>setuser({...user,confirmPassword:e.target.value})} className='w-full h-10 rounded-lg input-bordered' type='password' placeholder=' Confirm Password'/>
//           </div>
//           {/* <div className='flex my-4'>
//             <div className='flex '>
//             <p>Male : </p>
//             <input checked={user.gender==="male"} onChange={()=>handleCheckBox("male")}   type="checkbox" defaultChecked className="checkbox" />
//             </div>
//            <div className='flex '>
//            <p> Female : </p>
//            <input checked={user.gender==="female"} onChange={()=>handleCheckBox("female")}   type="checkbox" defaultChecked className="checkbox" />
//            </div>
//           </div > */}
//             <p className='text-center'>Already have an account ? 
//             <Link to='/login' className='text-blue-200'> Login</Link>
//             </p>
//            <div className='flex items-center' >
//             <button type='submit' className="w-full my-2 -10 btn btn-active ">Signup</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup









import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from '..';


const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const navigate = useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/users/register", user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })
  }
  return (
    <div className="mx-auto min-w-96">
      <div className='w-full p-6 bg-gray-400 border border-gray-100 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
        <h1 className='text-3xl font-bold text-center'>Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className='w-full h-10 input input-bordered'
              type="text"
              placeholder='Full Name' />
          </div>
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='w-full h-10 input input-bordered'
              type="text"
              placeholder='Username' />
          </div>
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='w-full h-10 input input-bordered'
              type="password"
              placeholder='Password' />
          </div>
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className='w-full h-10 input input-bordered'
              type="password"
              placeholder='Confirm Password' />
          </div>
          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                defaultChecked
                className="mx-2 checkbox" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                defaultChecked
                className="mx-2 checkbox" />
            </div>
          </div>
          <p className='my-2 text-center'>Already have an account? <Link to="/login"> login </Link></p>
          <div>
            <button type='submit' className='mt-2 border btn btn-block btn-sm border-slate-700'>Singup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup