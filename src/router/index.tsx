import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PageLayout } from '../view/pages/layouts/PageLayout';
import { Home } from '../view/pages/Home';
import { AboutUs } from '../view/pages/AboutUs';
import { Services } from '../view/pages/Services';
import { Reviews } from '../view/pages/Reviews';
import ScrollToTop from '../view/components/ScrollToTop';

export function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
