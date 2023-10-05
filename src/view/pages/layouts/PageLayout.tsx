import { Outlet, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '../../components/Button';
import { NavigationLink } from '../../components/NavigationLink';
import whatsapp from '../../../assets/icons/whatsapp.svg';
import facebook from '../../../assets/icons/facebook.svg';
import logo from '../../../assets/logo.png';

export function PageLayout() {
  const { pathname } = useLocation();

  function handleTitle(pathname: string) {
    switch (pathname) {
      case '/':
        return 'Your home cleaner than ever, leave the dirty work to us.';
      case '/services':
        return 'Our services';
      case '/reviews':
        return 'See our reviews!';
      case '/about-us':
        return 'About Us: Elevating Cleanliness to a New Level';
    }
  }

  return (
    <div className="w-full h-full bg-gray-0 text-black font-quicksand select-none relative">
      <header className="flex flex-col justify-center items-center w-full h-fit py-8 px-10 lg:py-0 bg-gray-0 text-blue-0 lg:flex-row lg:justify-between lg:items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[400px] lg:h-[150px] lg:w-[200px]"
        />
        <nav className="flex flex-wrap text-lg justify-center items-center font-medium gap-x-4 text-md gap-y-3 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <NavigationLink to="/" label="Home" />
          <NavigationLink to="/services" label="Services" />
          <NavigationLink to="/reviews" label="Reviews" />
          <NavigationLink to="/about-us" label="About us" />
          <Button className="hidden h-10 w-44 lg:block" />
        </nav>
      </header>

      <section className="bg-room bg-no-repeat bg-cover h-[650px] flex flex-col justify-center items-center py-12 text-white px-10 lg:justify-center lg:items-start">
        <h1 className="text-5xl text-center mb-4 max-w-2xl font-semibold lg:leading-[68h1x] lg:text-left">
          {handleTitle(pathname)}
        </h1>
        <span className="text-2xl font-semibold">Phone: +1 860-860-1358</span>
        <span className="text-2xl font-semibold">Phone: +1 860 890-7578</span>
        <Button className="h-12 w-44 mt-6 mb-10" />
      </section>
      <main className="w-full h-fit bg-gray-0">
        <Outlet />
      </main>
      <footer className="bg-white h-fit w-full flex flex-col flex-wrap justify-between items-center px-20 py-10 md:py-5 lg:py-5  lg:px-10 lg:flex-row">
        <img
          src={logo}
          alt="Logo"
          className="lg:mb-0 w-[400px] lg:h-[150px] lg:w-[200px]"
        />

        <div className="flex flex-col lg:mt-0 text-black">
          <div className="flex flex-col text-lg whitespace-nowrap mr-2 h-full  font-bold justify-center lg:mr-8">
            <span className="text-bold text-center">Phones:</span>
            <span>+1 860-860-1358</span>
            <span>+1 860 890-7578</span>
          </div>

          <div className="mt-4 flex gap-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100024653587024"
              target="_blank"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-8 cursor-pointer"
              />
            </a>

            <a href="https://g.co/kgs/BVTEHE" target="_blank">
              <FcGoogle className="h-8 w-8" />
            </a>
            <a href="https://w.app/monalizacleaningservices" target="_blank">
              <img
                src={whatsapp}
                alt="Whatsapp"
                className="w-8 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
