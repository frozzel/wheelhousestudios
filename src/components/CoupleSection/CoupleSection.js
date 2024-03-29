import React from 'react';
import { Link } from 'react-router-dom'
import coupleImg1 from '../../images/couple/img-1.png'
import coupleImg2 from '../../images/couple/img-2.png'
import coupleImg3 from '../../images/couple/shape.png'

const CoupleSection = (props) => {

    return (
        <section className={`wpo-couple-section section-padding ${props.cClass}`} id="couple">
            <div className="container">
                <div className="couple-area clearfix">
                    <div className="row align-items-center">
                        <div className="col col-md-5 col-12">
                            <div className="couple-item">
                                <div className="couple-img">
                                    <img src={coupleImg1} alt="" />
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
                            </div>
                        </div>
                        <div className="col col-md-2 col-12">
                            <div className="middle-couple-shape">
                                <div className="shape">
                                    <img src={coupleImg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-5 col-12">
                            <div className="couple-item">
                                <div className="couple-img">
                                    <img src={coupleImg2} alt="" />
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoupleSection;