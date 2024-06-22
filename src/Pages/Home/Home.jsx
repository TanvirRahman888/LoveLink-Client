import { Helmet } from "react-helmet-async";
import PremiumMember from "./PremiumMember";
import Slider from "./Slider";
import SuccessStory from "./SucessStory";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>LoveLink | Home</title>
            </Helmet>
            <Slider></Slider>
            <PremiumMember></PremiumMember>
            <SuccessStory></SuccessStory>

        </div>
    );
};

export default Home;