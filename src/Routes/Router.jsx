import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/LogIn/Register";
import PrivateRoute from "./PrivateRoute";
import Private from "../Pages/Private/Private";
import Biodata from "../Pages/Biodata/Biodata";
import BiodataDetails from "../Pages/Common/BiodataDetails";
import Dashboard from "../Dashboard/Dashboard";
import WishList from "../Dashboard/WishList";
import MyProfile from "../Dashboard/MyProfile";
import EditProfile from "../Dashboard/EditProfile";
import AllUsers from "../Dashboard/AdminDashboard/AllUsers";
import AllBiodata from "../Dashboard/AdminDashboard/AllBiodata";
import AddBiodata from "../Dashboard/AdminDashboard/AddBiodata";
import MaleBiodata from "../Dashboard/AdminDashboard/MaleBiodata";
import FemaleBiodata from "../Dashboard/AdminDashboard/FemaleBiodata";

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
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children:[
            {
                path:'/dashboard',
                element:<WishList></WishList>
            },
            {
                path:'/dashboard/myprofile',
                element:<MyProfile></MyProfile>
            },
            {
                path:'/dashboard/editprofile',
                element:<EditProfile></EditProfile>
            },
            // Admin Routes
            {
                path:'/dashboard/alluser',
                element:<AllUsers></AllUsers>
            },
            {
                path:'/dashboard/allbiodata',
                element:<AllBiodata></AllBiodata>
            },
            {
                path:'/dashboard/addbiodata',
                element:<AddBiodata></AddBiodata>
            },
            {
                path:'/dashboard/malebiodata',
                element:<MaleBiodata></MaleBiodata>
            },
            {
                path:'/dashboard/femalebiodata',
                element:<FemaleBiodata></FemaleBiodata>
            },
        ]
    }
  ]);