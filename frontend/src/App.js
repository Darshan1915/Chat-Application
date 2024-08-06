//  import './App.css';
//  import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Signup from './components/Signup';
// import Login from './components/Login';
// import HomePage from './components/HomePage';

//  const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<HomePage/>
//   },
//   {
//     path:"/register",
//     element:<Signup/>
//   },
//   {
//     path:"/login",
//     element:<Login/>
//   }
//  ])

// function App() {
//   return (
//     <div className="flex items-center h-screen p-4">
//         <RouterProvider router={router}/>
//     </div>
//   );
// }

// export default App;


 





import Signup from './components/Signup';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/HomePage';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from "react-redux";
import io from "socket.io-client";
import { setSocket } from './redux/socketSlice';
import { setOnlineUsers } from './redux/userSlice';
import { BASE_URL } from '.';

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },

])

function App() { 
  const {authUser} = useSelector(store=>store.user);
  const {socket} = useSelector(store=>store.socket);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(authUser){
      const socketio = io(`${BASE_URL}`, {
          query:{
            userId:authUser._id
          }
      });
      dispatch(setSocket(socketio));

      socketio?.on('getOnlineUsers', (onlineUsers)=>{
        dispatch(setOnlineUsers(onlineUsers))
      });
      return () => socketio.close();
    }else{
      if(socket){
        socket.close();
        dispatch(setSocket(null));
      }
    }

  },[authUser]);

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <RouterProvider router={router}/>
    </div>

  );
}

export default App;










