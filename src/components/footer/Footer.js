import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo2.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <div className="wpo-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <Link className="logo" to="/"><img src={Logo} alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="footer-link">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/portfolio-grid">Portfolio</Link></li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/rsvp-2">Collaborate</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                {/* <li><Link onClick={ClickHandler} to="/"><i className="ti-twitter"></i></Link></li> */}
                                <li><Link onClick={ClickHandler} target="_blank" to="https://www.instagram.com/wheelhouse.studios?igsh=MXVqMDM4b3Z6NDlvYw%3D%3D&utm_source=qr"><i className="fa-brands fa-square-instagram"></i></Link></li>
                                <li><Link onClick={ClickHandler} target="_blank" to="https://www.tiktok.com/@wheelhousestudios?_t=8lf8kDVcsNL&_r=1"><i className="fa-brands fa-tiktok"></i></Link></li>
                                <li><Link onClick={ClickHandler} target="_blank" to="https://www.instagram.com/wheelhouse.studios?igsh=MXVqMDM4b3Z6NDlvYw%3D%3D&utm_source=qr"><i className="ti-facebook"></i></Link></li>
                                {/* <li><Link onClick={ClickHandler} to="/"><i className="ti-linkedin"></i></Link></li> */}
                                {/* <li><Link onClick={ClickHandler} to="/"><i className="ti-skype"></i></Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© Copyright 2024 | <Link to="/">Wheel House Studios</Link> | All right reserved.</p>
                            <small> <small><small><small>Designed by <Link className="text-secondary" to="https://cyrusgroupinnovations.com">Cyrus Group Innovations</Link></small></small></small></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;