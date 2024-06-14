import React, { useContext } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useWishList from "../../Hooks/useWishList";

export default function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [wishlist] = useWishList()

    const handelLogOut = () => {
        logOut()
            .then(() => toast.success('Logout Successful'))
            .catch((error) => {
                toast.error(error.message)
            });
    }

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 flex flex-col gap-2 pt-2 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >

                <NavLink to={'/'} className="p-2 border-2 text-2xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 font-medium rounded-lg ">Home</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/biodata'} className="p-2 border-2 text-2xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 font-medium rounded-lg ">Biodata</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/aboutus'} className="p-2 border-2 text-2xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 font-medium rounded-lg ">About Us</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/contactus'} className="p-2 border-2 text-2xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 font-medium rounded-lg ">Contact Us</NavLink>
            </Typography>
            {
                user ?
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal flex gap-2 items-center"
                    >
                        {/* <NavLink onClick={handelLogOut} className="p-2 border-2 text-2xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 font-medium rounded-lg ">Log Out</NavLink> */}

                        <NavLink to={'/dashboard'}><button type="button" title="Wish List" className="relative inline-flex items-center p-2 text-sm text-center text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 font-medium rounded-lg">
                            <img src="https://static.vecteezy.com/system/resources/previews/020/038/368/non_2x/pink-color-heart-icon-isolated-transparent-background-free-png.png" className="w-5 h-5" alt="" />
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{wishlist.length}</div>
                        </button></NavLink>

                        <div className="dropdown lg:dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Profile Picture" src={user?.photoURL || "https://static.thenounproject.com/png/363639-200.png"} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu lg:menu-sm dropdown-content lg:mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-full lg:w-52">
                                <li className="p-2 border-2 text-2xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg"><a>{user?.displayName}</a></li>
                                <li className="p-2 border-2 text-2xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg"><Link to={'/updateprofile'}>Update Profile</Link></li>
                                <li className="p-2 border-2 text-2xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg"><Link to={'/dashboard'}>Dashboard</Link></li>
                                <li className="p-2 border-2 text-2xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 rounded-lg"><Link onClick={handelLogOut}> <a className="">Log Out</a> </Link></li>
                            </ul>
                        </div>

                    </Typography>

                    :
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal"
                    >
                        <NavLink to={'/login'} className="p-2 border-2 text-2xl text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-pink-800 font-medium rounded-lg ">Log In</NavLink>
                    </Typography>

            }

        </ul>
    );

    return (
        <div className="">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 mb-3 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >

                        <div className="ml-2 mt-2">
                            <p className="text-2xl space-y-0 "><span className="text-3xl font-bold text-red-300">L</span>ove<span className="text-3xl font-bold text-red-300">L</span>ink</p>
                        </div>
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav} className="px-2">
                    {navList}

                </MobileNav>
            </Navbar>
        </div>
    );
}