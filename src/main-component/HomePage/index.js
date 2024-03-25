import React, { Fragment, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import About from '../../components/about/about';
import BannerSec from '../../components/BannerSec/BannerSec';
import FunFact from '../../components/FunFact/FunFact';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/Navbar/Navbar'
import PartnerSection from '../../components/PartnerSection';
import Product from '../../components/Product';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import RsvpSection from '../../components/RsvpSection/RsvpSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import Footer from '../../components/footer/Footer';
import BlogSection from '../../components/BlogSection/BlogSection';
import { setRef } from '@material-ui/core';




const HomePage = ({ addToCart, addToWishList }) => {
    const [refresh, setRefresh] = useState(false);

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const addToWishListProduct = (product) => {
        addToWishList(product);
    };

    const products = productsArray

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // useEffect(() => {
    //     if (process.env.NODE_ENV === 'production' && !refresh) {
    //         window.location.reload();
    //         setRefresh(true);
    //     }
    // }, [refresh]);

    return (
        <Fragment>
            <Navbar />
            <Hero />
            <About />
            {/* <ServiceSection pbClass={'pt-0'}/> */}
            {/* <FunFact /> */}
            
            {/* <ProjectSection /> */}
           
            <BannerSec />
            <Testimonial />
            {/* <TeamSection />
            <PartnerSection /> */}
            {/* <Product
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            /> */}
            <RsvpSection rClass={'pt-0'}/>
            {/* <PricingSection pvClass={'pt-0'}/> */}
            {/* <BlogSection /> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart, addToWishList })(HomePage);