import React, {Fragment, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PortfolioSection from '../../components/PortfolioSection';
import PartnerSection from '../../components/PartnerSection';
import img from '../../images/page-title-portfolio2.jpg'
import RsvpSection from '../../components/RsvpSection/RsvpSection';


const PortfolioGridPage =() => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Portfolio'} pagesub={'Portfolio'} img={img}/> 
            <PortfolioSection pClass={'tb-padding'}/>
            <RsvpSection rClass={'pt-0'}/>
            <PartnerSection pClass={'pb-120'}/>
            
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioGridPage;
