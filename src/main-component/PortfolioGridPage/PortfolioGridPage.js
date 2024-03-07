import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PortfolioSection from '../../components/PortfolioSection';
import PartnerSection from '../../components/PartnerSection';

const PortfolioGridPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Portfolio Grid'} pagesub={'Portfolio'}/> 
            <PortfolioSection pClass={'tb-padding'}/>
            <PartnerSection pClass={'pb-120'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioGridPage;
