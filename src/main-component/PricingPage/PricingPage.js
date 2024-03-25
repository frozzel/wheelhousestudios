import React, { Fragment, useEffect } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PricingSection from '../../components/PricingSection/PricingSection';
import PartnerSection from '../../components/PartnerSection';


const PricingPage =() => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'}/> 
            <PricingSection/> 
            <PartnerSection pClass={'section-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default PricingPage;
