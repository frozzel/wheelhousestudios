import React from 'react'
import abimg from '../../images/about/1.png'
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
                                <h4>We Are The Best Wedding Photographer & Videographer </h4>
                                <p>Convallis gravida odio viverra nisi, aliquam sem netus. Sed at semper at lacus.
                                    Nam integer nunc pellentesque nunc pulvinar donec scelerisque. Malesuada massa
                                    facilisis aliquam nunc ut nisl tincidunt nibh. Massa feugiat vitae habitant
                                    metus viverra. Praesent massa habitant sapien odio ac scelerisque praesent id.
                                </p>
                                <Link onClick={ClickHandler} to="/contact" className="theme-btn">APPOINMENT</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-2">
                            <div className="wpo-about-text">
                                <h2>Our Story</h2>
                                <h4>Our Company Has a Great Mission & Policy</h4>
                                <p>Convallis gravida odio viverra nisi, aliquam sem netus. Sed at semper at lacus.
                                    Nam integer nunc pellentesque nunc pulvinar donec scelerisque. Malesuada massa
                                    facilisis aliquam nunc ut nisl tincidunt nibh. Massa feugiat vitae habitant
                                    metus viverra. Praesent massa habitant sapien odio ac scelerisque praesent id.
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
                </div>
            </div>
        </section>
    )
}

export default About;