import React, {Fragment, useEffect} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Contactpage from '../../components/Contactpage/Contactpage';
import img from '../../images/page-title-colab.jpg'


const ContactPage =() => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} img={img}/> 
            <Contactpage/> 
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ContactPage;

