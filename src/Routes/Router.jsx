import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/LogIn/Register";
import PrivateRoute from "./PrivateRoute";
import Private from "../Pages/Private/Private";
import Biodata from "../Pages/Biodata/Biodata";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/Biodata',
            element:<Biodata></Biodata>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/private',
            element:<PrivateRoute><Private></Private></PrivateRoute>
        },
      ]
    },
  ]);