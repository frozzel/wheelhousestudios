import React, { Fragment } from 'react';
import Hero6 from '../../components/hero6/hero6';
import Navbar from '../../components/Navbar/Navbar'
import PartnerSection from '../../components/PartnerSection';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import Scrollbar from '../../components/scrollbar/scrollbar'
import ServiceSectionS3 from '../../components/ServiceSection3/ServiceSection3';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import RsvpSectionS4 from '../../components/RsvpSectionS4/RsvpSectionS4';
import Footer from '../../components/footer/Footer';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import VideoSection2 from '../../components/VideoSection2';
import vimg from '../../images/cta4.jpg'




const HomePage6 = () => {

    return (
        <Fragment>
            <Navbar  hclass={'wpo-header-style-4'}/>
            <Hero6 />
            <ServiceSectionS3 />
            <VideoSection2 vimg={vimg} vClass={'wpo-video-section-s2 pt-0'}/>
            <ProjectSectionS2 prClass={'pt-120'}/>
            <RsvpSectionS4 rClass={'pt-0'}/>
            <Testimonial2 />
            <PartnerSection />
            <BlogSection2/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage6;