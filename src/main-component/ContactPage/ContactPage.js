import React, {Fragment, useEffect, useState} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Contactpage from '../../components/Contactpage/Contactpage';


const ContactPage =() => {
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // useEffect(() => {
    //     if (process.env.NODE_ENV === 'production' && !refresh) {
    //         window.location.reload();
    //         setRefresh(true);
    //     }
    // }, [refresh]);
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/> 
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ContactPage;

