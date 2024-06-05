import { Outlet } from "react-router-dom";
import StickyNavbar from "../Common/StickyNavbar";
import { SimpleFooter } from "../Common/Footer";


const Root = () => {
    return (
        <div className="container mx-auto px-3">
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
            <SimpleFooter></SimpleFooter>
            
        </div>
    );
};

export default Root;