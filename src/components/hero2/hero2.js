import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from 'react-reveal/Slide';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'



const Hero2 = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-style-2">
            <div className="wedding-announcement">
                <div className="couple-text">
                    <Slide bottom cascade>
                        <h2>Planning Your Everlasting Memories</h2>
                        <p>Let’s Make Your Day Memorable.Your Successful
                            Wedding is Our Job.</p>
                    </Slide>
                </div>
            </div>

            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        speed={1800}
                        parallax={true}
                        navigation
                    >
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${hero1})` }}>
                                <div className="slide-inner slide-bg-image">
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${hero2})` }}>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide" style={{ backgroundImage: `url(${hero3})` }}>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Hero2;