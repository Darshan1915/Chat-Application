import './App.css';
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from "./components/Login.jsx"
import HomePage from './components/HomePage.jsx';
import Signup from './components/Signup.jsx';

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
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
            <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
 