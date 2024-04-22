import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-13.png'
import ts2 from '../../images/testimonial/img-11.jpeg'
import ts3 from '../../images/testimonial/img-14.jpeg'


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Pricing for a videographer wasn’t really in our budget until someone mentioned Quinton. He’s very personable and he made us feel very comfortable throughout the whole process! His prices are very reasonable & the quality of the video is amazing. We got our video back in a good amount of time and we LOVED our video, we get a ton of compliments on it. We would recommend him to anybody! He was awesome!",
        Title: 'Marissa Cox',
        Date: "23.05.2023",
    },
    {
        id: '01',
        tImg: ts2,
        Des: "I am a very reserved person and I don’t like my picture being taken at all. However, Quinton’s personality put me at ease and I loved that he had so many different ideas! The wedding day was so stressful and hectic and I appreciate Quinton for making a schedule to make the photography portion as smooth as possible. Everyone from the wedding loved his photos. They are AMAZING. Everyone also loved how friendly and bubbly he was. To this day we still hear about how much people loved the photos or just loved him in general. So yes, we would 100% recommend Quinton to anyone.",
        Title: 'Veronica Cruz-Chambers',
        Date: "11.04.2023",
    },
    {
        id: '01',
        tImg: ts3,
        Des: "VI had never had to look for a photographer before, but I have heard horror stories about pricing and quality of photos. I knew Quinton would be an excellent choice simply because he has such an outstanding personality. He helped with where to take the photos, poses, and plenty of other things I didn't realize went into photography! Quinton turned some casual senior photos into something magical I can remember forever.",
        Title: 'Sofia Frenzel',
        Date: "10.27.2023",
    }
]

const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section section-padding">
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row align-items-center">
                        <div className="col col-lg-7">
                            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} arrows={false}>
                                {
                                    testimonial.map((tesmnl, tsm) => (
                                        <div className="testimonial-img" key={tsm}>
                                            <img src={tesmnl.tImg} alt="" />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <div className="col col-lg-5">
                            <div className="wpo-testimonial-items">
                                <Slider
                                    asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    fade={true}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="wpo-testimonial-item" key={tsm}>
                                                <div className="wpo-testimonial-text">
                                                    <i className="fi flaticon-quotation"></i>
                                                    <p>{tesmnl.Des}</p>
                                                    <div className="wpo-testimonial-text-btm">
                                                        <h3>{tesmnl.Title}</h3>
                                                        <span>Wedding- {tesmnl.Date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;