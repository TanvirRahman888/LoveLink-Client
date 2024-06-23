import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";

// import Swiper core and required modules
import { Navigation, Autoplay, Pagination,  A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SuccessStory = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch("https://love-link-server-eta.vercel.app/successstory")
            .then(res => res.json())
            .then(data => setFeedback(data));
    }, []);

    const generateStars = (stars) => {
        const totalStars = 5;
        let starIcons = [];

        for (let i = 0; i < totalStars; i++) {
            starIcons.push(
                <svg
                    key={i}
                    className={`w-4 h-4 ms-1 ${i < stars ? 'text-yellow-300' : 'text-gray-600 dark:text-gray-500'}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
            );
        }

        return starIcons;
    };

    return (
        <div>
            <SectionTitle title={"Success Story"} sortDescription={"Happy Clients Feedback"}></SectionTitle>
            {/* {feedback.length} */}
            {/* ---------- */}
            <Swiper
                // install Swiper modules
                modules={[Navigation,Autoplay, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {feedback.map(storyCard => (
                    <SwiperSlide key={storyCard._id}>
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg" src={storyCard.image} alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{storyCard.userName}</h5>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{storyCard.marriageDate}</h5>
                                <div className="flex items-center">
                                    {generateStars(storyCard.reviewStar)}
                                </div>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{storyCard.successStoryText}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SuccessStory;
