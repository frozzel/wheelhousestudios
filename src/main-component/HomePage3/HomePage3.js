import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Hero3 from '../../components/hero3/hero3';
import WeddingDate from '../../components/WeddingDate/WeddingDate';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import StorySection from '../../components/StorySection';
import PartnerSection from '../../components/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import RsvpSectionS3 from '../../components/RsvpSectionS3/RsvpSectionS3';
import Footer from '../../components/footer/Footer';
import BlogSection from '../../components/BlogSection/BlogSection';
import VideoSection2 from '../../components/VideoSection2';
import PortfolioSection from '../../components/PortfolioSection';
import EventSection from '../../components/EventSection/EventSection';
import vimg from '../../images/cta2.jpg'



const HomePage3 = () => {

    return (
        <Fragment>
            <Navbar2 />
            <Hero3 />
            <WeddingDate />
            <CoupleSection />
            <VideoSection2 vimg={vimg}/>
            <StorySection/>
            <PortfolioSection prClass={'pb-0'}/>
            <RsvpSectionS3/>
            <PartnerSection />
            <EventSection />
            <BlogSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage3;