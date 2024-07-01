import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../../images/partners/1.png'
import pimg2 from '../../images/partners/2.png'
import pimg3 from '../../images/partners/3.png'
import pimg4 from '../../images/partners/4.png'
import pimg5 from '../../images/partners/5.png'

const partners = [
    {
        pImg: pimg1,
        scr: "https://player.vimeo.com/video/837778849?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        title: "Marissa and Austin Highlight Film"
    },
    {
        pImg: pimg2,
        scr: "https://player.vimeo.com/video/896362095?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        title: "Sarah and Pabel October 21st"
    },
    {
        pImg: pimg3,
        scr: "https://player.vimeo.com/video/827409167?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        title: "2023 Bloomin’ Fest™"
    },
    {
        pImg: pimg4,
        scr: "https://player.vimeo.com/video/843004131?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        title: "City of Austell's Juneteenth Celebration™"
    },
    {
        pImg: pimg5,
        scr: "https://player.vimeo.com/video/837778849?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        title: "Marissa and Austin Highlight Film"
    },
    {
        pImg: pimg1,
        scr: "https://player.vimeo.com/video/896362095?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        title: "Sarah and Pabel October 21st"
    },
]


const PartnerSection = (props) => {

    var settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className={`wpo-partners-section ${props.pClass}`}>
            <div className="container">
            <div className="wpo-section-title">
                    {/* <h4>Sweet Memories</h4> */}
                    <h2>Videography</h2>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids partners-slider">
                            <Slider {...settings}>
                                {partners.map((partner, pitem) => (
                                    <div className="grid" key={pitem} >
                                        {/* <img src={partner.pImg} alt="" /> */}
                                        <div style={{ padding: '99.9% 0 0 0', position: 'relative' }} >
                                            <iframe src={partner.scr} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title={partner.title}></iframe>
                                            </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;