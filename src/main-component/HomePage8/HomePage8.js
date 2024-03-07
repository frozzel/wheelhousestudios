import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Categorys from '../../components/Categorys/Categorys';
import Hero8 from '../../components/hero8/hero8';
import Navbar from '../../components/Navbar/Navbar'
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import PartnerSection from '../../components/PartnerSection';
import ProductShop from '../../components/ProductShop/ProductShop';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';



const ShopHomePage = ({ addToCart, addToWishList }) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const addToWishListProduct = (product) => {
        addToWishList(product);
    };

    const products = productsArray

    return (
        <Fragment>
            <Navbar />
            <Hero8 />
            <Categorys />
            <OfferBanner />
            <ProductShop
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <PartnerSection pClass={'pb-120'} />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart, addToWishList })(ShopHomePage);