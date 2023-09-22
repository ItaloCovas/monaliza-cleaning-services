import { Outlet } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { NavigationLink } from '../../components/NavigationLink';
import whatsapp from '../../../assets/icons/whatsapp.svg';
import facebook from '../../../assets/icons/facebook.svg';
import google from '../../../assets/icons/google.svg';

export function PageLayout() {
  return (
    <div className="w-full h-full bg-gray-0 text-black font-quicksand select-none relative">
      <header className="flex flex-col justify-center items-center w-full h-fit py-4 px-10 bg-gray-0 text-pink-0 lg:flex-row lg:justify-between lg:items-center">
        <Logo className="mb-8 h-14 lg:mb-0" />
        <nav className="flex flex-wrap justify-center items-center font-medium gap-x-4 text-md gap-y-3 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <NavigationLink to="/" label="Home" />
          <NavigationLink to="/services" label="Services" />
          <NavigationLink to="/reviews" label="Reviews" />
          <NavigationLink to="/about-us" label="About us" />
          <Button className="hidden h-10 w-44 lg:block" />
        </nav>
      </header>

      <section className="bg-room bg-no-repeat bg-cover h-[650px] flex flex-col justify-center items-center py-12 text-white px-10 lg:justify-center lg:items-start">
        <h1 className="text-5xl text-center mb-4 max-w-2xl font-semibold lg:leading-[68h1x] lg:text-left">
          Your home cleaner than ever, leave the dirty work to us.
        </h1>
        <Button className="h-12 w-44 mt-6 mb-10" />
      </section>
      <main className="w-full h-fit bg-gray-0">
        <Outlet />
      </main>
      <footer className="bg-pink-0 h-fit w-full flex flex-col flex-wrap justify-between items-center px-20 py-10  lg:px-10 md:flex-row lg:flex-row">
        <Logo className="text-white w-36 lg:w-48 md:w-48" />

        <div className="flex flex-col mt-8 lg:mt-0">
          <div className="flex flex-col whitespace-nowrap mr-2 h-full text-white font-bold justify-center lg:mr-8">
            <span className="text-bold">Phones:</span>
            <span>+1 860-860-1358</span>
            <span>+1 860 890-7578</span>
          </div>

          <div className="mt-4 flex gap-x-4">
            <img src={facebook} alt="Facebook" className="w-8 cursor-pointer" />
            <img
              src={google}
              alt="Google Review"
              className="w-8 cursor-pointer"
            />
            <img src={whatsapp} alt="Whatsapp" className="w-8 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}
