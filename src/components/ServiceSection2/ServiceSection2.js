import React from "react";
import Slider from "react-slick";
import Services from '../../api/service'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'


const ServiceSectionS2 = (props) => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode:true,
        autoplay: true,
        centerPadding:'100px',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode:false,
                }
            }
        ]
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className={`wpo-Service-section-s2 section-padding ${props.pbClass}`}>
            <div className="container-fluid">
                <div className="wpo-Service-wrap">
                    <div className="service-slider">
                        <Slider {...settings}>
                            {Services.slice(0,6).map((service, sitem) => (
                                <div className="wpo-Service-item" key={sitem}>
                                    <div className="wpo-Service-img">
                                        <img src={service.simg1} alt="" />
                                    </div>
                                    <div className="wpo-Service-text">
                                        <Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title}</Link>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS2;