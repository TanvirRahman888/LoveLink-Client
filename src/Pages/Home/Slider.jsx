import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div className="relative">

            <Carousel className="rounded-xl" loop={true}>
                <div className="max-h-[600px] h-[600px] w-full">
                    <img
                        src="https://arjunkarthaphotography.com/wp-content/uploads/2016/11/online-wedding-photography-course-cover-1.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="max-h-[600px] h-[600px] w-full">
                    <img
                        src="https://www.shimansky.co.za/cdn/shop/articles/Wedding-Trends-Around-The-World_Shimansky-Cover.jpg"
                        alt="image 2"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="max-h-[600px] h-[600px] w-full">
                    <img
                        src="https://knotsbyamp.com/wp-content/uploads/2015/05/Blog-cover-1-of-1.jpg"
                        alt="image 3"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </Carousel>
            <div className="absolute bottom-24 flex justify-between px-20 w-full ">
                <Link><button className="btn btn-outline border-red-300 border-2 text-white text-xl hover:bg-red-100 hover:text-red-500">Gallary</button> </Link>
                <Link><button className="btn btn-outline border-red-300 border-2 text-white text-xl hover:bg-red-100 hover:text-red-500">Join Here</button> </Link>
            </div>
        </div>
    );
};

export default Slider;