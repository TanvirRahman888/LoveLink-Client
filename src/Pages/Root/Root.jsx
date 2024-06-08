import { Outlet, useLocation } from "react-router-dom";
import StickyNavbar from "../Common/StickyNavbar";
import { SimpleFooter } from "../Common/Footer";


const Root = () => {
    const location=useLocation()
    console.log(location);
    const noHeaderFooter=location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div className="container mx-auto px-3">
            {noHeaderFooter || <StickyNavbar></StickyNavbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <SimpleFooter></SimpleFooter>}
            
            
        </div>
    );
};

export default Root;