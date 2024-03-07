import React, { Fragment } from 'react';
import About2 from '../../components/about2/about2';
import FunFact from '../../components/FunFact/FunFact';
import Hero2 from '../../components/hero2/hero2';
import Navbar from '../../components/Navbar/Navbar'
import PartnerSection from '../../components/PartnerSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import ServiceSectionS2 from '../../components/ServiceSection2/ServiceSection2';
import Testimonial from '../../components/Testimonial/Testimonial';
import RsvpSectionS2 from '../../components/RsvpSectionS2/RsvpSectionS2';
import Footer from '../../components/footer/Footer';
import BlogSection from '../../components/BlogSection/BlogSection';
import VideoSection from '../../components/VideoSection';
import vimg from '../../images/cta.jpg'



const HomePage2 = () => {

    return (
        <Fragment>
            <Navbar />
            <Hero2 />
            <FunFact fClass={'pt-120'}/>
            <ServiceSectionS2 />
            <About2 />
            <Testimonial />
            <VideoSection vimg={vimg}/>
            <ProjectSection prClass={'pt-120'}/>
            <PartnerSection />
            <RsvpSectionS2/>
            <BlogSection bClass={'pt-0'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage2;