import { Helmet } from "react-helmet-async";
import PremiumMember from "./PremiumMember";
import Slider from "./Slider";
import SuccessStory from "./SucessStory";
import HowItWorks from "./HowItWorks";
import SuccessCounter from "./SuccessCounter";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>LoveLink | Home</title>
            </Helmet>
            <Slider></Slider>
            <PremiumMember></PremiumMember>
            <SuccessStory></SuccessStory>
            <HowItWorks></HowItWorks>
            <SuccessCounter></SuccessCounter>

        </div>
    );
};

export default Home;