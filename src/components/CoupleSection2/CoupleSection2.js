import React from 'react';
import { Link } from 'react-router-dom'
import coupleImg1 from '../../images/couple/img-1.jpg'
import coupleImg2 from '../../images/couple/img-2.jpg'

import shape1 from '../../images/couple/shape-2.png'
import shape2 from '../../images/couple/shape-3.png'

const CoupleSection2 = (props) => {

    return (
        <section className={`wpo-couple-section-s2 section-padding ${props.cClass}`} id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="shape-1"><img src={shape1} alt=""/></div>
                    <div className="shape-2"><img src={shape2} alt=""/></div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="couple-item">
                                <div className="couple-img">
                                    <img src={coupleImg1} alt=""/>
                                </div>
                                <div className="couple-text">
                                    <h3>Esabella Juliet</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae
                                        nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sagittis
                                        blandit.</p>
                                    <div className="social">
                                        <ul>
                                            <li><Link to="/home3"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="round-1"></div>
                                <div className="round-2"></div>
                                <div className="round-3"></div>
                                <div className="layer-1"></div>
                                <div className="layer-2"></div>
                                <div className="layer-3"></div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="couple-item">
                                <div className="couple-img">
                                    <img src={coupleImg2} alt=""/>
                                </div>
                                <div className="couple-text">
                                    <h3>William Jack</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae
                                        nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sagittis
                                        blandit.</p>
                                    <div className="social">
                                        <ul>
                                            <li><Link to="/home3"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/home3"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="layer-1"></div>
                                <div className="layer-2"></div>
                                <div className="layer-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoupleSection2;