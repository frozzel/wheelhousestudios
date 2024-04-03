import React, {useRef, useState} from 'react'
import cimg from '../../images/contact/img-6.png'
import shape1 from '../../images/contact/1.png'
import shape2 from '../../images/contact/2.png'
import RSVPFrom from '../RSVPFrom/RSVPFrom'
import emailjs from '@emailjs/browser'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const RsvpSectionS2 = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_br2lcnr', 'template_z8js5gs', form.current, '_esjagXPbaFFWegfH')
          .then(() => {
              alert('Message sent successfully!');
              window.location.reload();
          }, (error) => {
                alert('Message failed to send');
                
          });
      };
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
                                <form onSubmit={sendEmail} ref={form} className="contact-validation-active" >
                                    <div className="row">
                                        <div className="col col-lg-12 col-12">
                                            <div className="form-field">
                                                <input
                                                    
                                                    type="text"
                                                    name="name"
                                                    required
                                                    className="form-control"
                                                    placeholder="Your Name" />
                                                    
                                            </div>
                                        </div>
                                        <div className="col col-lg-12 col-12">
                                            <div className="form-field">
                                                <input
                                                    
                                                    type="email"
                                                    name="email"
                                                    required
                                                    className="form-control"
                                                    placeholder="Your Email" />
                                               
                                            </div>
                                        </div>
                                        <div className="col col-lg-12 col-12">
                                            <div className="form-field">
                                                <input
                                                    
                                                    type="phone"
                                                    name="phone"
                                                    required
                                                    className="form-control"
                                                    placeholder="Your Phone Number" />
                                               
                                            </div>
                                        </div>
                                        <div className="col col-lg-12 col-12">
                                            <div className="form-field">
                                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} type="date" name="date"/>
                                            </div>
                                        </div>
                                        <div className="col col-lg-12 col-12">
                                            <div className="form-field">
                                                <select
                                                    required
                                                    type="text"
                                                    className="form-control"
                                                    name="service">
                                                    <option>What type of service are you looking for?</option>
                                                    <option>Engagement</option>
                                                    <option>Event</option>
                                                    <option>Family</option>
                                                    <option>Maternity</option>
                                                    <option>New Born</option>
                                                    <option>Party</option>
                                                    <option>Portraits</option>
                                                    <option>Senior</option>
                                                    <option>Wedding</option>
                                                    <option>Other</option>
                                                </select>
                                               
                                            </div>
                                        </div>
                                        <div className="col col-lg-12 col-12">
                                            <div className="form-field">
                                                <select
                                                    
                                                    type="text"
                                                    className="form-control"
                                                    name="marketing">
                                                    <option >How did you find me?</option>
                                                    <option>Website</option>
                                                    <option>Google</option>
                                                    <option>Facebook</option>
                                                    <option>Instagram</option>
                                                    <option>Friend/Family</option>
                                                    <option>Client Referral</option>
                                                    <option>Other</option>
                                                    <option></option>
                                                </select>
                                                
                                            </div>
                                        </div>
                                        {/* <div className="col col-lg-12 col-12"> */}
                                            {/* <div className="form-field"> */}
                                            <input className='form-control ' placeholder='Tell me more about this project '>
                                            
                                            </input>
                                                <textarea
                                                    
                                                    type="textarea"
                                                    name="message"
                                                    rows="4"
                                                    
                                                    className=""
                                                    placeholder=" " />
                                                    
                                            {/* </div> */}
                                        {/* </div> */}
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn-s3">Send An Inquiry</button>
                                    </div>
                                </form >
                              
                                {/* <RSVPFrom /> */}
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