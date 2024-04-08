import React from 'react'
import abimg from '../../images/about/5.jpg'
import abimg2 from '../../images/about/2.png'
import { Link } from 'react-router-dom'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const About = (props) => {
    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-item">
                                <div className="wpo-about-img">
                                    <img src={abimg} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <h2>About Us</h2>
                                <h4>Photographer & Videographer </h4>
                                <p>Hi there, I'm Quinton Wheeler, a hybrid photographer / videographer who is passionate about capturing special moments on camera. Thanks so much for stopping by. My love for photo and video started when I was highschool having fun with a camera with my friends, and now has completely evolved into a business that I love. <br/><br/>
                                <p>When I'm not behind the lens, you can find me enjoying a game of baseball (go braves!), hiking the great outdoors, or enjoying the company of my fiancé and our fur babies. I have a passion for storytelling through photography and videography, and I can't wait to document your story in a way that reflects its true essence. Let’s chat and see how we can make your vision come to life!
                                </p>   
                                </p>
                                <Link onClick={ClickHandler} to="/contact" className="theme-btn">CONTACT US</Link>
                                {/* <Link onClick={ClickHandler} to="/contact" className="theme-btn">APPOINMENT</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-2">
                            <div className="wpo-about-text">
                                <h2>Our Story</h2>
                                <h4>Embracing What We Love!</h4>
                                <p>When I'm not behind the lens, you can find me enjoying a game of baseball (go braves!), hiking the great outdoors, or enjoying the company of my fiancé and our fur babies. I have a passion for storytelling through photography and videography, and I can't wait to document your story in a way that reflects its true essence. Let’s chat and see how we can make your vision come to life!
                                </p>
                                <Link onClick={ClickHandler} to="/contact" className="theme-btn">CONTACT US</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-1">
                            <div className="wpo-about-item">
                                <div className="wpo-about-img">
                                    <img src={abimg2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default About;