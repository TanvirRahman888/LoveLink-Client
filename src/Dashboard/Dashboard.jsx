import { useContext, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const { logOut } = useContext(AuthContext);
    const { Admin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handelLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successful');
                navigate('/');

            })
            .catch((error) => {
                toast.error(error.message)
            });
    }

    return (
        <div className="flex flex-col md:flex-row gap-5 container mx-auto min-h-screen ">
            <Helmet>
                <title>LoveLink | Dashboard</title>
            </Helmet>
            {/* Dashboard Menu */}
            <div className="flex flex-col gap-5 bg-pink-200 p-5 ">
                {
                    Admin ?
                        <div className="flex flex-col gap-5 bg-pink-200 py-5 p-4 border-4 border-pink-300 rounded-lg">
                            <h2 className="text-2xl font-bold ">Admin Dashboard</h2>
                            {/* <NavLink to={'/'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>Home</NavLink> */}
                            <NavLink to={'/dashboard/dashboard'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>Dashboard</NavLink>
                            <NavLink to={'/dashboard/alluser'} end className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>All Users</NavLink>
                            <NavLink to={'/dashboard/allbiodata'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>All Biodata</NavLink>
                            <NavLink to={'/dashboard/addbiodata'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>Add Biodata</NavLink>
                            <NavLink to={'/dashboard/malebiodata'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>Male Biodata</NavLink>
                            <NavLink to={'/dashboard/femalebiodata'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>Female Biodata</NavLink>
                            {/* <p onClick={handelLogOut} className="p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg">Logout</p> */}
                        </div>
                        :
                        <></>

                }
                
                    <NavLink to={'/'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>Home</NavLink>
                    <NavLink to={'/dashboard'} end className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>My Wishlist</NavLink>
                    <NavLink to={'/dashboard/myprofile'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>My Profile</NavLink>
                    <NavLink to={'/dashboard/editprofile'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>Edit Profile</NavLink>
                    <NavLink to={'/dashboard/contactrequest'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>My Contact Request</NavLink>
                    <Link><p href="#" onClick={handelLogOut} className="p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg">Logout</p></Link>
              



            </div>

            {/* ----------------------------------------- */}
            {/* DashBoard Content */}
            <div className="flex-grow">
                <Outlet></Outlet>


            </div>
        </div>
    );
};

export default Dashboard;