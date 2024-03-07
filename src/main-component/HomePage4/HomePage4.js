import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Hero4 from '../../components/hero4/hero4';
import CoupleSection2 from '../../components/CoupleSection2/CoupleSection2';
import StorySection from '../../components/StorySection';
import PartnerSection from '../../components/PartnerSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import RsvpSectionS3 from '../../components/RsvpSectionS3/RsvpSectionS3';
import Footer from '../../components/footer/Footer';
import BlogSection from '../../components/BlogSection/BlogSection';
import PortfolioSection from '../../components/PortfolioSection';
import EventSection from '../../components/EventSection/EventSection';
import WeddingCountdown from '../../components/WeddingCountdown/WeddingCountdown';
import BrideGrooms from '../../components/BrideGrooms';



const HomePage4 = () => {

    return (
        <Fragment>
            <Navbar2 />
            <Hero4 />
            <CoupleSection2 />
            <WeddingCountdown />
            <StorySection stClass={'wpo-story-section-s2 pb-0'} />
            <PortfolioSection prClass={'pb-0'} />
            <BrideGrooms tClass={'pb-0'}/>
            <RsvpSectionS3 />
            <PartnerSection />
            <EventSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage4;