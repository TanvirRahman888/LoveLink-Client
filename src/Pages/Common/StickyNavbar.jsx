import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

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

                <NavLink to={'/'} className="p-2 border-2 text-2xl border-red-300 rounded-md hover:bg-red-200">Home</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/biodata'} className="p-2 border-2 text-2xl border-red-300 rounded-md hover:bg-red-200">Biodata</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/aboutus'} className="p-2 border-2 text-2xl border-red-300 rounded-md hover:bg-red-200">About Us</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/contactus'} className="p-2 border-2 text-2xl border-red-300 rounded-md hover:bg-red-200">Contact Us</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/login'} className="p-2 border-2 text-2xl border-red-300 rounded-md hover:bg-red-200">Log In</NavLink>
            </Typography>
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