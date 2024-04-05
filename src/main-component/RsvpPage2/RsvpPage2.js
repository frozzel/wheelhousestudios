import React, { Fragment, useEffect, useState } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS2 from '../../components/RsvpSectionS2/RsvpSectionS2';
import About from '../../components/about/about';

const RsvpPage2 = () => {
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Collaborate'} pagesub={'Collaborate'} />
            <RsvpSectionS2/>
            {/* <PartnerSection pClass={'pb-120'}/> */}
            <About />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage2;
