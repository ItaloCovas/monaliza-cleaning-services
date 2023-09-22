import { ServicesCard } from '../../components/ServicesCard';

import spray from '../../../assets/spray.svg';
import thrash from '../../../assets/thrash.svg';
import hanger from '../../../assets/hanger.svg';
import brush2 from '../../../assets/brush2.svg';

export function Services() {
  return (
    <section className="text-black h-fit w-full px-20 py-20 bg-gray-0">
      <div className="flex flex-wrap justify-center items-center gap-14 h-fit">
        <ServicesCard
          title="Deep Cleaning"
          description="A deep clean is a more detailed and comprehensive type of cleaning than that a regular clean. It means cleaning away all kinds of dirt and grime that have accumulated over a long time on the deepest surfaces or corners of the house. It covers more areas than that of a basic cleaning like deep scrubbing stovetops and tubs, cleaning inside microwaves and ovens, heavy brushing of bathtubs and floors, etc."
          icon={spray}
        />
        <ServicesCard
          title="Standard Cleaning"
          description="Standard cleaning is done after a deep cleaning has been done, usually 2 weeks after. Regular cleaning is recommended to maintain your house clean, and free of dust, grime, and grease. Dusting, vacuuming, mopping, window cleaning, fans, and showers will be clean."
          icon={thrash}
          iconPosition="left-[-40px] top-[-40px]"
        />
        <ServicesCard
          title="Vacation Cleaning"
          description="Our professional vacation rental cleaners are background-checked, insured, bonded, and expertly trained to deliver an impeccable touch of ambiance with a thorough cleaning to create beautiful vacation rental homes that guests appreciate. Our company understands that cleaning a vacation rental property is different from standard house cleaning."
          icon={hanger}
        />
        <ServicesCard
          title="Office Cleaning"
          description="We provide comprehensive commercial cleaning services that ensure that your workplace is clean and sanitary for your staff, customers, and clients. Whether you require a daily office cleaning service or would prefer to have a team in to clean only a few times a week, you will enjoy our outstanding service that leaves your workplace at its cleanest. "
          icon={brush2}
          iconPosition="left-[-40px] top-[-45px]"
        />
      </div>
    </section>
  );
}
