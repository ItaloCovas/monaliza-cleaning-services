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
          description="There are so many reasons that keep up with your house cleaning is a challege. So, if you want a high quality service on keeping your space clean, count on us and call today. We offer you an expansive type of services. And you and your family can enjoy the best comfort feeling with no stress."
          icon={brush2}
          iconPosition="left-[-40px] top-[-40px]"
        />

        <ServicesCard
          title="One-time Cleaning (Deep and Spring Cleaning)"
          description="Need a deep cleaning, move-in or move out cleaning, post construction or just want a free dusty home? Our one-time cleaning will make your space look brand new. "
          icon={hanger}
        />
        <ServicesCard
          title="Commercial and Janitorial Cleaning"
          description="Office Spaces, Medical offices, Banks. All the commercial spaces, our team will make sure to provide you the best experience on commercial cleaning you need."
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
