import React from 'react'
import cimg from '../../images/contact/shape-1.png'
import cimg2 from '../../images/contact/shape-2.png'
import RSVPFrom2 from '../RSVPFrom2/RSVPFrom2';

const RsvpSectionS4 = (props) => {
    return (
        <section className={`wpo-contact-section-s4 section-padding ${props.rClass}`} id="rsvp">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-lg-12 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-section-inner">
                                <div className="wpo-contact-form-area">
                                    <div className="wpo-section-title">
                                        <h4>Are You Attending?</h4>
                                    </div>
                                    <RSVPFrom2 />
                                </div>
                            </div>
                            <div className="shape-1"><img src={cimg} alt=""/></div>
                            <div className="shape-2"><img src={cimg2} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSectionS4;