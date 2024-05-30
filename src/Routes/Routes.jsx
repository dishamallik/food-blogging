import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Error";
import AddBlog from "../Pages/AddBlog";
import AllBlogs from "../Pages/AllBlogs";
import FoodDetails from "../Pages/FoodDetails";

import Update from "../Pages/Update";
import PrivateRoute from "../Pages/PrivateRoute";
import Feature from "../Pages/Feature";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>

        },
        {
            path: '/register',
            element: <Register></Register>

        },
        {
            path: '/add',
            element: <AddBlog></AddBlog>
        },
        {
            path: '/all',
            element: <AllBlogs></AllBlogs>,
            // loader: () => fetch('http://localhost:5000/blogs')
        },
        {
            
                path:'/blogs/:id',
               element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
             
        },
        {
            
                path:"/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
      
              
        },
        {
        
                path: '/Featured',
                element: <Feature></Feature>,
                loader: () => fetch('http://localhost:5000/blogs')
            
        }
       
      ]
    },
    {
        path: '*',
        element: <Error></Error>
       }
  ]);


  export default router;