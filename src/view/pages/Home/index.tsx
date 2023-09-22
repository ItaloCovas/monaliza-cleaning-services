import { Link } from 'react-router-dom';

import pen from '../../../assets/icons/pen.svg';
import brush from '../../../assets/icons/brush.svg';
import leaf from '../../../assets/icons/leaf.svg';
import bulldoser from '../../../assets/icons/bulldoser.svg';

import user from '../../../assets/icons/user.png';
import vacuum from '../../../assets/vacuum.png';
import hall from '../../../assets/hall.png';
import before1 from '../../../assets/before1.jpeg';
import after1 from '../../../assets/after1.jpeg';
import before2 from '../../../assets/before2.jpeg';
import after2 from '../../../assets/after2.jpeg';

import { Card } from '../../components/Card';
import { Divider } from '../../components/Divider';
import { ReviewCard } from '../../components/ReviewCard';
import { Carousel } from '../../components/Carousel';

export function Home() {
  const slides = [
    {
      url: before1
    },
    {
      url: after1
    },
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
          title="END OF TENANCY"
          description="This is a type of option that gives you the right to buy a stock at a
        specified price (strike price) before a certain expiration date."
        />
        <Card
          src={brush}
          title="DEEP CLEANING"
          description="This is a type of option that gives you the right to buy a stock at a specified price (strike price) before a certain expiration date."
        />
        <Card
          src={leaf}
          title="SPRING CLEANING"
          description="This is a type of option that gives you the right to buy a stock at a specified price (strike price) before a certain expiration date."
        />
        <Card
          src={bulldoser}
          title="AFTER BUILDERS CLEANING"
          description="This is a type of option that gives you the right to buy a stock at a specified price (strike price) before a certain expiration date."
        />
      </div>

      <div className="p-8 pt-10 bg-gray-100">
        <Divider />
        <h2 className="text-2xl text-center font-bold">
          Why people choose us?
        </h2>
        <h2 className="text-2xl text-center font-bold">See for yourself</h2>
      </div>

      <div className="pb-20 flex justify-center items-center relative  bg-gray-100">
        <Carousel slides={slides} />
      </div>

      <div className="flex justify-center flex-col items-center lg:flex-row lg:gap-x-20 p-20 gap-4 w-full p-20 bg-gray-0">
        <div className="lg:w-1/2 w-full flex justify-center flex-col  gap-4">
          <h1 className="text-3xl font-bold mb-0">A little bit about us:</h1>
          <p className="text-xl font-medium mb-2 whitespace-pre-wrap">
            Monaliza Cleaning Services, all care that your home deserves! We are
            a dedicated and passionate team committed to raising the standards
            of cleanliness for homes and businesses throughout our community.
          </p>
          <p className="text-xl font-medium">
            We believe that a clean space goes beyond aesthetics; it directly
            impacts the quality of life and productivity. That's why we are
            committed to providing high-quality cleaning services that transform
            spaces into truly welcoming places.
          </p>
          <Link
            to="/about-us"
            className="text-2xl underline font-bold text-pink-0"
          >
            More about us
          </Link>
        </div>
        <div className="lg:w-1/2 hidden w-0 lg:block">
          <img src={vacuum} alt="Vacuum" className=" rounded-lg" />
        </div>
      </div>

      <div className="flex justify-center flex-col items-center lg:flex-row lg:gap-x-20 pt-20 gap-4 w-full p-20 bg-gray-100">
        <div className="lg:w-1/2 hidden w-0 lg:block">
          <img src={hall} alt="Hall" className=" rounded-lg" />
        </div>
        <div className="lg:w-1/2 w-full flex justify-center flex-col font-medium">
          <h1 className="text-3xl font-bold mb-0">Services:</h1>
          <ul className="list-none mt-4 mb-10">
            <li className="text-xl font-medium relative pl-6 before:content-['\2022'] before:text-pink-0 before:font-bold before:inline-block before:w-4 before:ml-[-1rem]">
              Deep Cleaning
            </li>

            <li className="text-xl font-medium relative pl-6 before:content-['\2022'] before:text-pink-0 before:font-bold before:inline-block before:w-4 before:ml-[-1rem] mt-6">
              Standard Cleaning
            </li>

            <li className="text-xl font-medium relative pl-6 before:content-['\2022'] before:text-pink-0 before:font-bold before:inline-block before:w-4 before:ml-[-1rem] mt-6">
              Vacation Cleaning
            </li>

            <li className="text-xl font-medium relative pl-6 before:content-['\2022'] before:text-pink-0 before:font-bold before:inline-block before:w-4 before:ml-[-1rem] mt-6">
              Office Cleaning
            </li>

            <li className="text-xl font-medium relative pl-6 before:content-['\2022'] before:text-pink-0 before:font-bold before:inline-block before:w-4 before:ml-[-1rem] mt-6">
              Move in/Move out Cleaning
            </li>
          </ul>

          <Link
            to="/services"
            className="text-2xl underline font-bold text-pink-0 mt-2"
          >
            More services
          </Link>
        </div>
      </div>

      <div className="p-20 flex flex-col gap-20 justify-center lg:justify-start relative bg-gray-0">
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
        <Link
          to="/reviews"
          className="text-2xl text-center md:text-left lg:text-left underline font-bold text-pink-0 "
        >
          More reviews
        </Link>
      </div>
    </section>
  );
}
