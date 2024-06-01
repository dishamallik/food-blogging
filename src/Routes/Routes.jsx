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
import WishList from "../Pages/WishList";
import AllCard from "../Pages/AllCard";
import WishlistDetails from "../Pages/WishlistDetails";


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
            // loader: () => fetch('https://food-blogging-server.vercel.app/blogs')
        },
        {
            
                path:'/blogs/:id',
               element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`https://food-blogging-server.vercel.app/blogs/${params.id}`)
             
        },
        {
            
                path:"/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://food-blogging-server.vercel.app/blogs/${params.id}`)
      
              
        },
        {
        
                path: '/Featured',
             element: <Feature></Feature>,
                loader: () => fetch('https://food-blogging-server.vercel.app/blogs')
            
        },
        {
            path: '/wishlist',
            element: <PrivateRoute><WishList></WishList></PrivateRoute>,
            // loader: ({params}) => fetch(`https://food-blogging-server.vercel.app/blogs/${params.id}`)
      

        },
        {
         path: '/card/id',
         element: <AllCard></AllCard>,
         loader: ({params}) => fetch(`https://food-blogging-server.vercel.app/blogs/${params.id}`)
      
        },
        {
            
            path:'/wishlist/:id',
           element:<WishlistDetails></WishlistDetails>,
            loader: ({params}) => fetch(`https://food-blogging-server.vercel.app/wishlist/${params.id}`)
         
    },
       
      ]
    },
    {
        path: '*',
        element: <Error></Error>
       }
  ]);


  export default router;