import { Carousel } from '../../components/Carousel';

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
import user from '../../../assets/icons/user.png';
import { ReviewCard } from '../../components/ReviewCard';

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
        <ReviewCard
          className="self-start"
          iconPosition="left-[-10px] lg:left-[-30px]"
          src={user}
          name="Anna-lynn Monroe"
          positive="Professionalism, Punctuality, Quality, Responsiveness, Value"
          service="Deep clean"
          description="Monaliza Cleaning Services is amazing! Great attention to detail, friendly, and goes above and beyond! The best service! Truly a wonderful experience every time! ❤ "
        />
        <ReviewCard
          className="self-end"
          namePosition="lg:ml-0 right-[60px] lg:right-[70px]"
          iconPosition="right-[-10px]"
          src={user}
          name="Aracely Rankin"
          positive="Professionalism, Punctuality, Value"
          service="General housekeeping, Deep clean"
          description="It is my pleasure to recommend Monaliza’s Cleaning Services. Monaliza has been cleaning our home for almost a year. She is very professional, polite, and friendly..."
        />
        <ReviewCard
          className="self-start"
          iconPosition="left-[-10px] lg:left-[-30px]"
          src={user}
          name="Lauren Mocko"
          positive="Quality"
          service="Standard cleaning, Deep clean"
          description="Monaliza does a wonderful job cleaning. I fully appreciate the attention to detail and how clean my house is after her cleanings. I highly recommend her business!"
        />
        <ReviewCard
          className="self-end"
          namePosition="lg:ml-0 right-[60px] lg:right-[70px]"
          iconPosition="right-[-10px]"
          src={user}
          name="Sid Sahni"
          positive="Professionalism, Punctuality, Quality, Responsiveness, Value"
          service="Standard cleaning"
          description="I am so happy and pleased with Monaliza cleaning services. They are professional, friendly and do a fantastic job with cleaning our home. The best part is Monaliza’s positive attitude – she takes pride in her work and goes above and beyond to make sure the work she does is of high standard."
        />
        <ReviewCard
          className="self-start"
          iconPosition="left-[-10px] lg:left-[-30px]"
          src={user}
          name="Betsy Andrews"
          positive="Professionalism, Punctuality, Quality, Responsiveness"
          service="Standard cleaning, Deep clean"
          description="Very professional- I love coming into my home after they have cleaned - it smells clean and looks wonderful!"
        />
        <ReviewCard
          className="self-end"
          namePosition="lg:ml-0 right-[60px] lg:right-[70px]"
          iconPosition="right-[-10px]"
          src={user}
          name="Aracely Rankin"
          positive="Professionalism, Punctuality, Value"
          service="General housekeeping, Deep clean"
          description="It is my pleasure to recommend Monaliza’s Cleaning Services. Monaliza has been cleaning our home for almost a year. She is very professional, polite, and friendly..."
        />
      </div>
    </section>
  );
}
