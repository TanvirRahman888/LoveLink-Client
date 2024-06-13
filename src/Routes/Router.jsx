import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/LogIn/Register";
import PrivateRoute from "./PrivateRoute";
import Private from "../Pages/Private/Private";
import Biodata from "../Pages/Biodata/Biodata";
import BiodataDetails from "../Pages/Common/BiodataDetails";

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
            path:'/biodata',
            element:<Biodata></Biodata>
        },
        {
            path:'/biodata/:id',
            element:<PrivateRoute><BiodataDetails></BiodataDetails></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/biodata/${params.id}`)
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