import { useState } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { RxDot, RxDotFilled } from 'react-icons/rx';
import { cn } from '../../app/utils/cn';

interface CarouselProps {
  slides: { url: string }[];

  className?: string;
}

export function Carousel({ slides, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className={cn(
        'max-w-[560px] h-[400px] w-full m-auto relative group rounded-2xl',
        className
      )}
    >
      <button className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-50px] text-2xl rounded-full p-1 bg-white text-blue-0 cursor-pointer">
        <FiArrowLeft onClick={prevSlide} size={30} />
      </button>
      <button className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-50px] text-2xl rounded-full p-1 bg-white text-blue-0 cursor-pointer">
        <FiArrowRight onClick={nextSlide} size={30} />
      </button>
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
      ></div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((_slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-blue-0 text-3xl"
          >
            {currentIndex === slideIndex ? <RxDotFilled /> : <RxDot />}
          </div>
        ))}
      </div>
    </div>
  );
}
