import { useState } from 'react';
import { RxStarFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  FreeMode,
  Thumbs
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';

import pen from '../../../assets/icons/pen.svg';
import brush from '../../../assets/icons/brush.svg';
import leaf from '../../../assets/icons/leaf.svg';

import vacuum from '../../../assets/vacuum.png';
import hall from '../../../assets/hall.png';
import before1 from '../../../assets/before1.jpeg';
import after1 from '../../../assets/after1.jpeg';
import before2 from '../../../assets/before2.jpeg';
import after2 from '../../../assets/after2.jpeg';
import guarantee from '../../../assets/guarantee.png';
import pet from '../../../assets/pet.png';
import insured from '../../../assets/insured.png';

import { Card } from '../../components/Card';
import { Divider } from '../../components/Divider';
import { Carousel } from '../../components/Carousel';
import { ReviewCard } from '../../components/ReviewCard';
import { useWindowWidth } from '../../../app/hooks/useWindowWidth';
import { SwiperButton } from '../../components/SwiperButton';
import { reviews } from '../../../app/constants/reviews';
import { MailSection } from '../../components/MailSection';

export interface SliderProps {
  isBeginning: boolean;

  isEnd: boolean;
}

export function Home() {
  const windowWidth = useWindowWidth();

  const [sliderState, setSliderState] = useState<SliderProps>({
    isBeginning: false,
    isEnd: false
  });

  const slides = [
    {
      url: before1
    },
    {
      url: after1
    }
  ];

  const slidesTwo = [
    {
      url: before2
    },
    {
      url: after2
    }
  ];

  return (
    <section className="text-black h-fit w-full pt-10 bg-gray-100">
      <div className="flex flex-wrap justify-center items-center gap-6 h-fit mt-[-100px]">
        <Card
          src={pen}
          title="ONE-TIME CLEANING"
          description="Whether you need a deep cleaning, move-in cleaning, move-out cleaning, or simply want your home to be dust-free and pristine post construction, our one-time cleaning will leave your space feeling brand new."
        />
        <Card
          src={brush}
          title="COMMERCIAL AND JANITORIAL CLEANING"
          description="From office spaces to retail stores, from medical offices to banks, our cleaning team has the experience of providing careful and thorough commercial cleaning for businesses in the area."
        />
        <Card
          src={leaf}
          title="STANDARD CLEANING"
          description="There are plenty of reasons why keeping up with house cleaning can be challenging. For top-quality cleaning in the area, rely on us. We offer a wide range of cleaning services that take the stress out of home upkeep."
        />
      </div>

      <div className="p-8 pt-10 bg-gray-100">
        <Divider />
        <h2 className="text-2xl text-center font-bold">
          Why make us your first choice?
        </h2>
        <h2 className="text-2xl text-center font-bold">See for yourself</h2>
      </div>

      <div className="pb-20 px-10 flex justify-center items-center relative gap-x-60 gap-y-20 flex-wrap bg-gray-100">
        <Carousel slides={slides} />
        <Carousel slides={slidesTwo} />
      </div>

      <div className="flex justify-center flex-col items-center lg:flex-row lg:gap-x-20 pt-20 gap-4 w-full p-20 bg-gray-0">
        <div className="lg:w-1/2 hidden w-0 lg:block">
          <img src={hall} alt="Hall" className=" rounded-lg" />
        </div>
        <div className="lg:w-1/2 w-full flex justify-center flex-col font-medium">
          <h1 className="text-3xl font-bold mb-0">Services:</h1>
          <ul className="list-none mt-4 mb-10">
            <li className="text-xl font-medium relative pl-6 before:content-['\2022'] before:text-blue-0 before:font-bold before:inline-block before:w-4 before:ml-[-1rem]">
              Standard Cleaning
            </li>

            <li className="text-xl font-medium relative pl-6 before:content-['\2022'] before:text-blue-0 before:font-bold before:inline-block before:w-4 before:ml-[-1rem] mt-6">
              One-time Cleaning
            </li>

            <li className="text-xl font-medium relative pl-6 before:content-['\2022'] before:text-blue-0 before:font-bold before:inline-block before:w-4 before:ml-[-1rem] mt-6">
              Commercial and Janitorial Cleaning
            </li>

            <li className="text-xl font-medium relative pl-6 before:content-['\2022'] before:text-blue-0 before:font-bold before:inline-block before:w-4 before:ml-[-1rem] mt-6">
              Deep Cleaning
            </li>

            <li className="text-xl font-medium relative pl-6 before:content-['\2022'] before:text-blue-0 before:font-bold before:inline-block before:w-4 before:ml-[-1rem] mt-6">
              Spring Cleaning
            </li>
          </ul>

          <div className="flex items-center flex-wrap gap-x-8">
            <img
              src={guarantee}
              alt="Guarantee sign"
              className="w-20 h-20 md:w-24 md:h-24 mb-10"
            />
            <img
              src={pet}
              alt="Pet friendly sign"
              className="w-20 h-20 md:w-24 md:h-24 mb-10"
            />
            <img
              src={insured}
              alt="Fully insured sign"
              className="w-20 h-20 md:w-24 md:h-24 mb-10"
            />
          </div>

          <Link
            to="/services"
            className="text-2xl underline font-bold text-blue-0 mt-2"
          >
            More services
          </Link>
        </div>
      </div>

      <div className="p-20 flex flex-col gap-20 justify-center lg:justify-start relative bg-gray-100">
        <div className="flex  items-center justify-center gap-4 text-yellow-500">
          <RxStarFilled className="text-2xl" />
          <h2 className="text-center text-3xl font-bold text-black">Reviews</h2>
          <RxStarFilled className="text-2xl" />
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={windowWidth >= 500 ? 'auto' : 1.1}
            modules={[
              Navigation,
              Autoplay,
              Pagination,
              Scrollbar,
              FreeMode,
              Thumbs
            ]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true
            }}
            className="!static"
            spaceBetween={20}
            onSlideChange={(swiper) => {
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd
              });
            }}
          >
            {reviews.map((review) => {
              return (
                <SwiperSlide key={review.name} className="!w-fit !static">
                  <ReviewCard
                    name={review.name}
                    date={review.date}
                    description={review.description}
                  />
                </SwiperSlide>
              );
            })}

            <SwiperButton
              disabled={sliderState.isEnd}
              icon="right"
              isNext
              className="right-0"
            />

            <SwiperButton
              disabled={sliderState.isBeginning}
              icon="left"
              isNext={false}
              className="left-0"
            />
          </Swiper>
        </div>
        <Link
          to="/reviews"
          className="text-2xl text-center md:text-left lg:text-left underline font-bold text-blue-0 "
        >
          More reviews
        </Link>
      </div>

      <div className="flex justify-center flex-col items-center lg:flex-row lg:gap-x-20 p-20 gap-4 w-full bg-gray-0">
        <div className="lg:w-1/2 w-full flex justify-center flex-col  gap-4">
          <h1 className="text-3xl font-bold mb-0">A little bit about us:</h1>
          <p className="text-xl font-medium mb-2 whitespace-pre-wrap">
            Do you need a light, one time cleaning? Or maybe a deep cleaning
            after a construction/home remodeling or there~s a lot of things
            inside your house you don't need anymore? No job is too big or too
            small. We got it all for you. If you're expecting that "white glove"
            cleaning, you found the right place.
          </p>
          <p className="text-xl font-medium">
            Your comfort and satisfaction is our goal. we want you to have a
            great experience with our friendly team to provide you the best
            quality cleaning services. So if you're looking for high trained
            professionals and also competitive pricing, we got you covered!Give
            us a call and we'll get it done.
          </p>
          <Link
            to="/about-us"
            className="text-2xl underline font-bold text-blue-0"
          >
            More about us
          </Link>
        </div>
        <div className="lg:w-1/2 hidden w-0 lg:block">
          <img src={vacuum} alt="Vacuum" className=" rounded-lg" />
        </div>
      </div>

      <MailSection />
    </section>
  );
}
