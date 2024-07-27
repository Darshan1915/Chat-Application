 import './App.css';
 import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';

 const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/register",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }
 ])

function App() {
  return (
    <div className="flex items-center h-screen p-4">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;


//video time : 02:50