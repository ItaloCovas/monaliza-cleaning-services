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
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { SliderProps } from '../Home';
import { ReviewCard } from '../../components/ReviewCard';
import { RxStarFilled } from 'react-icons/rx';
import { useWindowWidth } from '../../../app/hooks/useWindowWidth';
import { SwiperButton } from '../../components/SwiperButton';
import { reviews } from '../../../app/constants/reviews';

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

      <div className="py-20 px-10 flex justify-center items-center relative gap-x-60 gap-y-20 flex-wrap bg-gray-0">
        <Carousel slides={slidesOne} />
        <Carousel slides={slidesTwo} />
        <Carousel slides={slidesThree} />
        <Carousel slides={slidesFour} />
        <Carousel slides={slidesFive} />
        <Carousel slides={slidesSix} />
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
              className="right-0 top-[60%]"
            />

            <SwiperButton
              disabled={sliderState.isBeginning}
              icon="left"
              isNext={false}
              className="left-0 top-[60%]"
            />
          </Swiper>
        </div>
      </div>
    </section>
  );
}
