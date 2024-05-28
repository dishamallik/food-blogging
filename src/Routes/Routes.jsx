import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Error";
import AddBlog from "../Pages/AddBlog";

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
        }
       
      ]
    },
    {
        path: '*',
        element: <Error></Error>
       }
  ]);


  export default router;