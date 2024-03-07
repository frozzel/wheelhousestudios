import React from "react";
import { Link } from 'react-router-dom'
const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const OfferBanner = () => {
    return (

        <section className="wpo-offer-banner-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-12 col-12">
                        <div className="offer-banner-text">
                            <div className="offer-banner-text-inner">
                                <span>Wedding Season Discounts</span>
                                <h2>Wedding Ring 50% Off</h2>
                                <Link onClick={ClickHandler} to="/shop" className="theme-btn" href="shop.html">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferBanner;