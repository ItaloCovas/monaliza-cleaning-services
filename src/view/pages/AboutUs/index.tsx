import { RiMapPin2Line } from 'react-icons/ri';

import services from '../../../assets/services.png';
import { Map } from '../../components/Map';

export function AboutUs() {
  return (
    <section className="text-black h-fit w-full pt-10 bg-gray-0">
      <h1 className="text-pink-0 font-bold px-20 text-3xl">
        About Us: Elevating Cleanliness to a New Level
      </h1>

      <div className="flex justify-between flex-col items-start lg lg:flex-row lg:gap-x-20 px-20 py-10 gap-4 w-full">
        <div className="lg:w-1/2 w-full h-full flex flex-col gap-4 lg:justify-between ">
          <p className="text-xl font-medium mb-2 whitespace-pre-wrap text-left">
            Welcome to Monaliza - your premium choice in cleaning services! We
            are a dedicated and passionate team committed to raising the
            standards of cleanliness for homes and businesses throughout our
            community.
          </p>
          <p className="text-xl font-medium text-left">
            Our story began with the vision of creating a healthier and more
            pleasant environment for people, making cleaning more than just a
            mundane task. We believe that a clean space goes beyond aesthetics;
            it directly impacts quality of life and productivity. That's why
            we're dedicated to offering high-quality cleaning services that
            transform spaces into truly welcoming places.
          </p>
        </div>
        <div className="lg:w-1/2 hidden w-0 lg:flex lg:justify-end lg:items-start">
          <img src={services} alt="Services" className=" rounded-lg" />
        </div>
      </div>

      <div className="flex justify-center flex-col items-start lg:flex-row lg:gap-x-20 pt-10 gap-4 w-full px-20 py-10  bg-gray-100">
        <div className="lg:w-1/2 hidden w-0 lg:block">
          <img src={services} alt="Hall" className=" rounded-lg" />
        </div>
        <div className="lg:w-1/2 w-full h-full flex flex-col gap-10 lg:gap-y-20 lg:justify-between ">
          <div>
            <h2 className=" font-bold text-2xl text-black mb-2">Our mission</h2>
            <p className="font-medium text-xl  text-left ">
              The mission of Monaliza is simple yet profound: to provide a clean
              and healthy environment for you and your family, for your
              employees and customers. We want you to feel safe and comfortable
              in your home or workplace, knowing that every detail is being
              meticulously cared for by our team of cleaning experts.
            </p>
          </div>
          <div>
            <h2 className=" font-bold text-2xl text-black mb-2">
              Commitment to Quality
            </h2>
            <p className="font-medium text-xl  text-left ">
              What sets us apart is our unwavering commitment to quality. Our
              professionals are highly trained and dedicated to performing every
              task with the utmost attention to detail. We use the best products
              and equipment on the market to ensure flawless results. We
              understand that every space is unique, and we customize our
              services to meet your individual needs.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col items-start lg:gap-x-20 px-20 py-10 gap-4 w-full">
        <div className="flex gap-4 justify-start mb-4">
          <RiMapPin2Line size={30} color="E941A1" />
          <h2 className=" font-bold text-2xl text-black">Where are we?</h2>
        </div>

        <Map />
      </div>
    </section>
  );
}
