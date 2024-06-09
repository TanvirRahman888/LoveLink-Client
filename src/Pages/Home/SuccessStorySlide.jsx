import { Swiper, SwiperSlide } from "swiper/react";


const SuccessStorySlide = ({ storyCard }) => {
    const { userName, image, marriageDate, reviewStar, successStoryText } = storyCard;
    return (
        <SwiperSlide>
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={image} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{userName}</h5>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{marriageDate}</h5>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{successStoryText}</p>
                </div>
            </div>
        </SwiperSlide>
    );
};

export default SuccessStorySlide;