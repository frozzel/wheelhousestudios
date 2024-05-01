import React, { Fragment, useEffect } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact from '../../components/FunFact/FunFact';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import BannerSec from '../../components/BannerSec/BannerSec';
import TeamSection from '../../components/TeamSection/TeamSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import PartnerSection from '../../components/PartnerSection';
import img from '../../images/page-title-about.jpg'
import RsvpSection from '../../components/RsvpSection/RsvpSection';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} img={img}/>
            <About />
            {/* <ServiceSection /> */}
            {/* <FunFact /> */}
            {/* <ProjectSection prClass={'pt-120'} /> */}
            <BannerSec />
            {/* <TeamSection /> */}
            {/* <PricingSection /> */}
            {/* <PartnerSection pClass={'section-padding'}/> */}
            <div className="mt-5">
            <RsvpSection rClass={'pt-0'}/>
            </div>``
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutPage;
