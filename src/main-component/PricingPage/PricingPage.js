import React, { Fragment, useEffect } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PricingSection from '../../components/PricingSection/PricingSection';
import PartnerSection from '../../components/PartnerSection';
import PricingSection2 from '../../components/PricingSection/PricingSection2';
import PricingSection3 from '../../components/PricingSection/PricingSection3';
import PricingSection4 from '../../components/PricingSection/PricingSection4';
import './index.css'
import img from '../../images/page-title-pricing.jpg'




const PricingPage =() => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'} img={img}/> 
            <div className="pt-5">
            <ul className="nav nav-pills d-flex justify-content-center" id="myTab" role="tablist">
                <li className="nav-item d-flex mx-1 my-1" role="presentation">
                    <button className="nav-link active  " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Wedding Photos</button>
                </li>
                <li className="nav-item d-flex mx-1 my-1" role="presentation">
                    <button className="nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Wedding Video</button>
                </li>
                <li className="nav-item d-flex mx-1 my-1" role="presentation">
                    <button className="nav-link  " id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Session Photos</button>
                </li>
                <li className="nav-item d-flex mx-1 my-1" role="presentation">
                    <button className="nav-link " id="contact-tab2" data-bs-toggle="tab" data-bs-target="#contact2" type="button" role="tab" aria-controls="contact" aria-selected="false">Session Video</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><PricingSection/></div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><PricingSection2/></div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><PricingSection3/></div>
                <div className="tab-pane fade" id="contact2" role="tabpanel" aria-labelledby="contact-tab2"><PricingSection4/></div>
            </div>
            </div>
            {/* <PricingSection/>  */}
            {/* <PricingSection2/>
            <PricingSection3/> */}
            {/* <PartnerSection pClass={'section-padding'}/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default PricingPage;
