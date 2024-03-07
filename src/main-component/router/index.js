import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
import HomePage6 from '../HomePage6/HomePage6';
import HomePage7 from '../HomePage7/HomePage7';
import HomePage8 from '../HomePage8/HomePage8';
import HomePage9 from '../HomePage9/HomePage9';
import AboutPage from '../AboutPage/AboutPage';
import StoryPage1 from '../StoryPage1/StoryPage1';
import StoryPage2 from '../StoryPage2/StoryPage2';
import StoryPage3 from '../StoryPage3/StoryPage3';
import StoryPage4 from '../StoryPage4/StoryPage4';
import AccomodationPage from '../AccomodationPage/AccomodationPage';
import RsvpPage1 from '../RsvpPage1/RsvpPage1';
import RsvpPage2 from '../RsvpPage2/RsvpPage2';
import RsvpPage3 from '../RsvpPage3/RsvpPage3';
import RsvpPage4 from '../RsvpPage4/RsvpPage4';
import RsvpPage5 from '../RsvpPage5/RsvpPage5';
import SeviceSinglePage from '../SeviceSinglePage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ProjectSinglePage from '../ProjectSinglePage';
import ProductSinglePage from '../ProductSinglePage';
import PortfolioGridPage from '../PortfolioGridPage/PortfolioGridPage';
import PortfolioMasonaryPage from '../PortfolioMasonaryPage/PortfolioMasonaryPage';
import PortfolioMasonaryPageS2 from '../PortfolioMasonaryPageS2/PortfolioMasonaryPageS2';
import PortfolioMasonaryPageS3 from '../PortfolioMasonaryPageS3/PortfolioMasonaryPageS3';
import PortfolioMasonaryPageS4 from '../PortfolioMasonaryPageS4/PortfolioMasonaryPageS4';
import ShopPage from '../ShopPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import BlogPage from '../BlogPage/BlogPage';
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft';
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull';
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide';
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth';
import ContactPage from '../ContactPage/ContactPage';
import CartPage from '../CartPage/CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived/OrderRecived';
import WishlistPage from '../WishlistPage/WishlistPage';
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import GalleryPage from '../GalleryPage/GalleryPage';
import PlannerPage from '../PlannerPage/PlannerPage';
import BrideGroomsPage from '../BrideGroomsPage/BrideGroomsPage';
import ServicePage from '../ServicePage/ServicePage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';
import ServicePageS3 from '../ServicePageS3/ServicePageS3';
import PricingPage from '../PricingPage/PricingPage';
import ComingSoonPage from '../ComingSoonPage/ComingSoonPage';
import ErrorPage from '../ErrorPage/ErrorPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='home' element={<Homepage />} />
          <Route path='home2' element={<HomePage2 />} />
          <Route path='home3' element={<HomePage3 />} />
          <Route path='home4' element={<HomePage4 />} />
          <Route path='home5' element={<HomePage5 />} />
          <Route path='home6' element={<HomePage6 />} />
          <Route path='home7' element={<HomePage7 />} />
          <Route path='home8' element={<HomePage8 />} />
          <Route path='home9' element={<HomePage9 />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='story' element={<StoryPage1 />} />
          <Route path='story-2' element={<StoryPage2 />} />
          <Route path='story-3' element={<StoryPage3 />} />
          <Route path='story-4' element={<StoryPage4 />} />
          <Route path='accomodation' element={<AccomodationPage />} />
          <Route path='rsvp' element={<RsvpPage1 />} />
          <Route path='rsvp-2' element={<RsvpPage2 />} />
          <Route path='rsvp-3' element={<RsvpPage3 />} />
          <Route path='rsvp-4' element={<RsvpPage4 />} />
          <Route path='rsvp-5' element={<RsvpPage5 />} />
          <Route path='gallery' element={<GalleryPage />} />
          <Route path='planner' element={<PlannerPage />} />
          <Route path='groom-bride' element={<BrideGroomsPage />} />
          <Route path='service' element={<ServicePage />} />
          <Route path='service-s2' element={<ServicePageS2 />} />
          <Route path='service-s3' element={<ServicePageS3 />} />
          <Route path='service-single/:id' element={<SeviceSinglePage />} />
          <Route path='team-single/:id' element={<TeamSinglePage />} />
          <Route path='project-single/:id' element={<ProjectSinglePage />} />
          <Route path='/product-single/:id' element={<ProductSinglePage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/coming' element={<ComingSoonPage />} />
          <Route path='/portfolio-grid' element={<PortfolioGridPage />} />
          <Route path='/portfolio-masonary' element={<PortfolioMasonaryPage />} />
          <Route path='/portfolio-masonary-s2' element={<PortfolioMasonaryPageS2 />} />
          <Route path='/portfolio-masonary-s3' element={<PortfolioMasonaryPageS3 />} />
          <Route path='/portfolio-masonary-s4' element={<PortfolioMasonaryPageS4 />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/order_received' element={<OrderRecived />} />
          <Route path='/blog-single/:id' element={<BlogDetails/>} />
          <Route path='/blog-single-left-sidebar/:id' element={<BlogDetailsLeftSiide/>} />
          <Route path='/blog-single-fullwidth/:id' element={<BlogDetailsFull/>} />
          <Route path='/blog' element={<BlogPage/>} />
          <Route path='/blog-left-sidebar' element={<BlogPageLeft/>} />
          <Route path='/blog-fullwidth' element={<BlogPageFullwidth/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/404' element={<ErrorPage/>} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<SignUpPage />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
