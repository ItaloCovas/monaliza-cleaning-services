import { RiMapPin2Line } from 'react-icons/ri';

import services from '../../../assets/services.png';
import mission from '../../../assets/mission.jpg';
import { Map } from '../../components/Map';
import { MailSection } from '../../components/MailSection';

export function AboutUs() {
  return (
    <section className="text-black h-fit w-full pt-10 bg-gray-0">
      <h1 className="font-bold px-20 text-3xl">
        About Us: Elevating Cleanliness to a New Level
      </h1>

      <div className="flex justify-between flex-col items-start lg lg:flex-row lg:gap-x-20 px-20 py-10 gap-4 w-full">
        <div className="lg:w-1/2 w-full h-full flex flex-col gap-4 lg:justify-between ">
          <p className="text-xl font-medium mb-2 whitespace-pre-wrap text-left">
            Let's face it, life can be messy, and a clean environment enhances
            all of our lives' experiences — be it at work or home. It is an
            irrefutable truth that cleanliness is essential for good health.
          </p>
          <p className="text-xl font-medium mb-2 whitespace-pre-wrap text-left">
            That's why you've come to the right place. Look no further…Our
            company is here to clean up whatever mess you find yourself in. And
            for your added convenience — we are at your service 7 days a week!
          </p>
          <p className="text-xl font-medium text-left">
            Do you need a light, one-time cleaning? Or perhaps a major after
            construction/remodel or have experienced a hoarding issue requiring
            a complete clean out? No job is too big or too small. We do it ALL!
            If you're looking for and expect that “white glove” cleaning, you've
            come to the right place.
          </p>
        </div>
        <div className="lg:w-1/2 hidden w-0 lg:flex lg:justify-end lg:items-start">
          <img src={services} alt="Services" className=" rounded-lg" />
        </div>
      </div>

      <div className="flex justify-center flex-col items-start lg:flex-row pt-10 gap-4 lg:gap-0 w-full px-20 py-10 bg-gray-100">
        <div className="lg:w-1/2 hidden w-0 lg:block">
          <img
            src={mission}
            alt="Room"
            className="h-[548px] w-[548px] rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 w-full h-full flex flex-col gap-10 lg:gap-y-20 lg:justify-between ">
          <div>
            <h2 className=" font-bold text-2xl text-black mb-2">Our mission</h2>
            <p className="font-medium text-xl  text-left ">
              Your satisfaction is our priority, we want you to feel comfortable
              with our family friendly cleaners and provide quality cleaning
              service. So If you are looking for the best cleaning experience,
              quality, highly trained professionals, along with competitive
              pricing we got you covered! Give us a call now and we'll get it
              done right! We are <strong>insured</strong> and{' '}
              <strong>bonded</strong>.
            </p>
          </div>
          <div>
            <h2 className=" font-bold text-2xl text-black mb-2">
              Commitment to Quality
            </h2>
            <p className="font-medium text-xl  text-left ">
              When it comes to providing professional house cleaning, commercial
              cleaning or janitorial services in our city, our track record
              speaks for itself. Our team of experienced cleaners at Monaliza
              Cleaning Services deliver fast and efficient home cleaning
              services with great results. Our goal is always to do our best to
              make your home or office sparkle with the clean it deserves.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col items-start lg:gap-x-20 px-20 py-10 gap-4 w-full">
        <div className="flex gap-4 justify-start mb-4">
          <RiMapPin2Line size={30} color="41ADD9" />
          <h2 className=" font-bold text-2xl text-black">Where are we?</h2>
        </div>

        <Map />
      </div>

      <MailSection />
    </section>
  );
}
