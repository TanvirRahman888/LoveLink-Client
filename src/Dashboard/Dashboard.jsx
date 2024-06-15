import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row gap-5 container mx-auto min-h-screen ">
            {/* Dashboard Menu */}
            <div className="flex flex-col gap-5 bg-pink-200 p-5 ">
                <NavLink to={'/'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>Home</NavLink>
                <NavLink to={'/dashboard'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>My Wishlist</NavLink>
                <NavLink to={'/dashboard/myprofile'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>My Profile</NavLink>
                <NavLink to={'/dashboard/editprofile'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>Edit Profile</NavLink>
                <NavLink to={'/dashboard/contactrequest'} className={'p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg'}>My Contact Request</NavLink>
                <p className="p-2 border-2 text-xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg">Logout</p>
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