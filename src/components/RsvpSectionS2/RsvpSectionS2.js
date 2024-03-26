import React from 'react'
import cimg from '../../images/contact/img-6.png'
import shape1 from '../../images/contact/1.png'
import shape2 from '../../images/contact/2.png'
import RSVPFrom from '../RSVPFrom/RSVPFrom'


const RsvpSectionS2 = (props) => {
    return (
        <section className="wpo-contact-section-s2 section-padding">
            <div className="contact-bg"><img src={cimg} alt=""/></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-xl-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title">
                                    <h4>Lets Collaborate</h4>
                                    <h2>Need an Extra Photographer?</h2>
                                </div>
                                <RSVPFrom />
                            </div>
                            <div className="vector-1">
                                <img src={shape1} alt="" />
                            </div>
                            <div className="vector-2">
                                <img src={shape2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSectionS2;