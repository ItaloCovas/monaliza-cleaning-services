import { ServicesCard } from '../../components/ServicesCard';

import spray from '../../../assets/spray.svg';
import thrash from '../../../assets/thrash.svg';
import hanger from '../../../assets/hanger.svg';
import brush2 from '../../../assets/brush2.svg';
import { RxStarFilled } from 'react-icons/rx';

export function Services() {
  return (
    <section className="text-black h-fit w-full bg-gray-0">
      <div className="flex flex-wrap justify-center items-center gap-14 h-fit p-20">
        <ServicesCard
          title="Standard Cleaning"
          description="There are plenty of reasons why keeping up with house cleaning can be challenging. For top-quality cleaning in the area, rely on us. We offer a wide range of cleaning services that take the stress out of home upkeep."
          icon={brush2}
          iconPosition="left-[-40px] top-[-40px]"
        />

        <ServicesCard
          title="One-time Cleaning"
          description="Whether you need a deep cleaning, move-in cleaning, move-out cleaning, or simply want your home to be dust-free and pristine post construction, our one-time cleaning will leave your space feeling brand new. "
          icon={hanger}
        />
        <ServicesCard
          title="Commercial and Janitorial Cleaning"
          description="From office spaces to retail stores, from medical offices to banks, our cleaning team has the experience of providing careful and thorough commercial cleaning for businesses in the area."
          icon={thrash}
          iconPosition="left-[-40px] top-[-45px]"
        />
        <ServicesCard
          title="Deep Cleaning"
          description="A deep clean is a more detailed and comprehensive type of cleaning than that a regular clean. It means cleaning away all kinds of dirt and grime that have accumulated over a long time on the deepest surfaces or corners of the house. It covers more areas than that of a basic cleaning like deep scrubbing stovetops and tubs, cleaning inside microwaves and ovens, heavy brushing of bathtubs and floors, etc."
          icon={spray}
        />
      </div>
      <div className="bg-blue-0 text-white text-base font-bold gap-x-10 w-full h-fit  py-10 text-center flex flex-col items-center gap-y-4 justify-center lg:flex-row lg:py-4 lg:text-base">
        <span className="flex items-center justify-center gap-x-2">
          <RxStarFilled />
          Over 5+ Years of Experience
          <RxStarFilled />
        </span>
        <span className="flex items-center justify-center gap-x-2">
          <RxStarFilled />
          Insured
          <RxStarFilled />
        </span>
        <span className="flex items-center justify-center gap-x-2">
          <RxStarFilled />
          References Available
          <RxStarFilled />
        </span>
        <span className="flex items-center justify-center gap-x-2">
          <RxStarFilled />
          Free in-home estimate
          <RxStarFilled />
        </span>
      </div>
    </section>
  );
}
