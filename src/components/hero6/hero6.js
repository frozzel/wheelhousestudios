import React from "react";
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import hero1 from '../../images/slider/slide-9.jpg'
import hero2 from '../../images/slider/slide-10.jpg'
import hero3 from '../../images/slider/slide-11.jpg'
import hero4 from '../../images/slider/slide-12.jpg'
import hero5 from '../../images/slider/slide-13.jpg'


import shape1 from '../../images/slider/shape7.png'
import shape2 from '../../images/slider/shape8.png'


const Hero6 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-slider-s3">
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
                                            <div className="shape-1"><img src={shape1} alt="" /></div>
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>Plan Your Dream With Us</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>India's Favorite wedding planning platform to plan your wedding with
                                                        authentic vendors! </p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <a href="rsvp.html" className="theme-btn">Contact Now</a>
                                                </div>
                                            </div>
                                            <div className="shape-2"><img src={shape2} alt="" /></div>
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
                                            <div className="shape-1"><img src={shape1} alt="" /></div>
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>Plan Your Dream With Us</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>India's Favorite wedding planning platform to plan your wedding with
                                                        authentic vendors! </p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <a href="rsvp.html" className="theme-btn">Contact Now</a>
                                                </div>
                                            </div>
                                            <div className="shape-2"><img src={shape2} alt="" /></div>
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
                                            <div className="shape-1"><img src={shape1} alt="" /></div>
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>Plan Your Dream With Us</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>India's Favorite wedding planning platform to plan your wedding with
                                                        authentic vendors! </p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <a href="rsvp.html" className="theme-btn">Contact Now</a>
                                                </div>
                                            </div>
                                            <div className="shape-2"><img src={shape2} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${hero4})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="shape-1"><img src={shape1} alt="" /></div>
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>Plan Your Dream With Us</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>India's Favorite wedding planning platform to plan your wedding with
                                                        authentic vendors! </p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <a href="rsvp.html" className="theme-btn">Contact Now</a>
                                                </div>
                                            </div>
                                            <div className="shape-2"><img src={shape2} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${hero5})` }}>
                                <div className="slide-inner slide-bg-image">
                                    <div className="container-fluid">
                                        <div className="slide-content-wrap">
                                            <div className="shape-1"><img src={shape1} alt="" /></div>
                                            <div className="slide-content">
                                                <div data-swiper-parallax="300" className="slide-title">
                                                    <h2>Plan Your Dream With Us</h2>
                                                </div>
                                                <div data-swiper-parallax="400" className="slide-text">
                                                    <p>India's Favorite wedding planning platform to plan your wedding with
                                                        authentic vendors! </p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div data-swiper-parallax="500" className="slide-btns">
                                                    <a href="rsvp.html" className="theme-btn">Contact Now</a>
                                                </div>
                                            </div>
                                            <div className="shape-2"><img src={shape2} alt="" /></div>
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

export default Hero6;