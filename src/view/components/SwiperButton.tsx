import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';
import { useSwiper } from 'swiper/react';
import { cn } from '../../app/utils/cn';

interface SwiperButtonProps {
  isNext?: boolean;

  disabled: boolean;

  icon: 'right' | 'left';

  className?: string;
}

export function SwiperButton({
  isNext,
  disabled,
  icon,
  className
}: SwiperButtonProps) {
  const swiper = useSwiper();

  return (
    <button
      className={cn(
        'py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40 absolute top-1/2 -translate-y-1/2 z-[99]',
        className
      )}
      onClick={() => (isNext ? swiper.slideNext() : swiper.slidePrev())}
      disabled={disabled}
    >
      {icon === 'right' ? (
        <RxChevronRight className=" text-blue-0 w-12 h-12" />
      ) : (
        <RxChevronLeft className=" text-blue-0 w-12 h-12" />
      )}
    </button>
  );
}
