import { Carousel } from '../../components/Carousel';
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

import before1 from '../../../assets/before1.jpeg';
import after1 from '../../../assets/after1.jpeg';
import before2 from '../../../assets/before2.jpeg';
import after2 from '../../../assets/after2.jpeg';
import before3 from '../../../assets/before3.jpeg';
import after3 from '../../../assets/after3.jpeg';
import before4 from '../../../assets/before4.jpeg';
import after4 from '../../../assets/after4.jpeg';
import before5 from '../../../assets/before5.jpeg';
import after5 from '../../../assets/after5.jpeg';
import before6 from '../../../assets/before6.jpeg';
import after6 from '../../../assets/after6.jpeg';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useState } from 'react';
import { SliderProps } from '../Home';
import { ReviewCard } from '../../components/ReviewCard';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';
import { useWindowWidth } from '../../../app/hooks/useWindowWidth';

export function Reviews() {
  const slidesOne = [
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

  const slidesThree = [
    {
      url: before3
    },
    {
      url: after3
    }
  ];

  const slidesFour = [
    {
      url: before4
    },
    {
      url: after4
    }
  ];

  const slidesFive = [
    {
      url: before5
    },
    {
      url: after5
    }
  ];

  const slidesSix = [
    {
      url: before6
    },
    {
      url: after6
    }
  ];

  const swiper = useSwiper();
  const windowWidth = useWindowWidth();

  const [sliderState, setSliderState] = useState<SliderProps>({
    isBeginning: false,
    isEnd: false
  });

  return (
    <section className="text-black h-fit w-full pt-10 bg-gray-0">
      <h1 className="text-center font-bold px-20 text-3xl">
        Before and After Galery
      </h1>

      <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-10 lg:gap-y-20 relative p-20 pt-10 bg-gray-0">
        <Carousel slides={slidesOne} />
        <Carousel slides={slidesTwo} />
        <Carousel slides={slidesThree} />
        <Carousel slides={slidesFour} />
        <Carousel slides={slidesFive} />
        <Carousel slides={slidesSix} />
      </div>

      <div className="p-20 flex flex-col gap-20 justify-center lg:justify-start relative bg-gray-100">
        <h2 className="text-center text-3xl font-bold">Reviews</h2>
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
            autoplay={{ disableOnInteraction: true, delay: 2000 }}
            loop={true}
            spaceBetween={20}
            onSlideChange={(swiper) => {
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd
              });
            }}
          >
            <SwiperSlide className="!w-fit">
              <ReviewCard
                name="Hillary Stern"
                date="Set, 2023"
                description="Monaliza is an excellent cleaner and company. They are timely, detail
              oriented, professional and consistent. I love the little details of
              creative flowers and designs they make from the toilet paper and paper
              towels. Always sweet and friendly as well."
              />
            </SwiperSlide>
            <SwiperSlide className="!w-fit">
              <ReviewCard
                name="Hillary Stern"
                date="Set, 2023"
                description="Monaliza is an excellent cleaner and company. They are timely, detail
              oriented, professional and consistent. I love the little details of
              creative flowers and designs they make from the toilet paper and paper
              towels. Always sweet and friendly as well."
              />
            </SwiperSlide>
            <SwiperSlide className="!w-fit">
              <ReviewCard
                name="Hillary Stern"
                date="Set, 2023"
                description="Monaliza is an excellent cleaner and company. They are timely, detail
              oriented, professional and consistent. I love the little details of
              creative flowers and designs they make from the toilet paper and paper
              towels. Always sweet and friendly as well."
              />
            </SwiperSlide>
            <SwiperSlide className="!w-fit">
              <ReviewCard
                name="Hillary Stern"
                date="Set, 2023"
                description="Monaliza is an excellent cleaner and company. They are timely, detail
              oriented, professional and consistent. I love the little details of
              creative flowers and designs they make from the toilet paper and paper
              towels. Always sweet and friendly as well."
              />
            </SwiperSlide>
            <SwiperSlide className="!w-fit">
              <ReviewCard
                name="Hillary Stern"
                date="Set, 2023"
                description="Monaliza is an excellent cleaner and company. They are timely, detail
              oriented, professional and consistent. I love the little details of
              creative flowers and designs they make from the toilet paper and paper
              towels. Always sweet and friendly as well."
              />
            </SwiperSlide>
            <SwiperSlide className="!w-fit">
              <ReviewCard
                name="Hillary Stern"
                date="Set, 2023"
                description="Monaliza is an excellent cleaner and company. They are timely, detail
              oriented, professional and consistent. I love the little details of
              creative flowers and designs they make from the toilet paper and paper
              towels. Always sweet and friendly as well."
              />
            </SwiperSlide>
            <SwiperSlide className="!w-fit">
              <ReviewCard
                name="Hillary Stern"
                date="Set, 2023"
                description="Monaliza is an excellent cleaner and company. They are timely, detail
              oriented, professional and consistent. I love the little details of
              creative flowers and designs they make from the toilet paper and paper
              towels. Always sweet and friendly as well."
              />
            </SwiperSlide>
          </Swiper>
          <button
            className="py-2 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40 absolute right-0 top-[60%] -translate-y-[60%] trans z-[99]"
            onClick={() => swiper.slideNext()}
            disabled={sliderState.isEnd}
          >
            <RxChevronRight className=" text-blue-0 w-12 h-12" />
          </button>
          <button
            className="py-2 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40 absolute top-[60%] -translate-y-[60%] left-0  z-[99]"
            onClick={() => swiper.slidePrev()}
            disabled={sliderState.isBeginning}
          >
            <RxChevronLeft className=" text-blue-0 w-12 h-12" />
          </button>
        </div>
      </div>
    </section>
  );
}
