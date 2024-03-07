import React from "react";
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero1 from '../../images/slider/slide-18.jpg'
import hero2 from '../../images/slider/slide-17.jpg'
import hero3 from '../../images/slider/slide-16.jpg'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero8 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-slider-s4">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={1800}
                        parallax={true}
                    >
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>New Arrival Makeup Kit</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>Let’s Make Your Day Memorable.Your Successful Wedding is Our Job.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div>
                                                    <Link onClick={ClickHandler} to="/shop" className="theme-btn">Featured Products</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${hero2})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>New Arrival Makeup Kit</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>Let’s Make Your Day Memorable.Your Successful Wedding is Our Job.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div>
                                                    <Link onClick={ClickHandler} to="/shop" className="theme-btn">Featured Products</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${hero3})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>New Arrival Makeup Kit</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>Let’s Make Your Day Memorable.Your Successful Wedding is Our Job.</p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div>
                                                    <Link onClick={ClickHandler} to="/shop" className="theme-btn">Featured Products</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Hero8;