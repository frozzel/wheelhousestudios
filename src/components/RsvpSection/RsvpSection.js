import React, {useState, useRef} from 'react'
import cimg from '../../images/contact/img-5.png'
import cimg2 from '../../images/contact/img-5.png'
import side1 from '../../images/contact/1.png'
import side2 from '../../images/contact/2.png'
import shape1 from '../../images/contact/1.png'
import shape2 from '../../images/contact/2.png'
import RSVPFrom from '../RSVPFrom/RSVPFrom'
import emailjs from '@emailjs/browser'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RsvpSection = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_glqd1k9', 'template_z8js5gs', form.current, '_esjagXPbaFFWegfH')
          .then(() => {
              alert('Message sent successfully!');
              window.location.reload();
          }, (error) => {
                alert('Message failed to send');
                
          });
      };

    return (
        <section className={`wpo-contact-section section-padding ${props.rClass}`}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xl-3 col-lg-3 col-md-3 col-12">
                        <div className="contact-img">
                            <img src={cimg} alt=""/>
                        </div>
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title">
                                    <h4>Lets Meet</h4>
                                    <h2>Make An Inquiry</h2>
                                </div>
                               
                                {/* <div className="hb-p-63c87e713ebfde0006dc9ba7-2"></div>
                            <img height="1" width="1" style={{display: "none"}} src="https://www.honeybook.com/p.png?pid=63c87e713ebfde0006dc9ba7"/>
                          */}
                                {/* <RSVPFrom/> */}
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
                                            <div className='form-control ' placeholder=''>Tell me more about this project 
                                            
                                            </div>
                                            <div className="px-2 w-100">
                                                <textarea
                                                    className="w-100 m-auto border rounded-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent "
                                                    type="textarea"
                                                    name="message"
                                                    rows="4"
                                                    placeholder=" " />
                                                    
                                            </div>
                                        {/* </div> */}
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn-s3">Send An Inquiry</button>
                                    </div>
                                </form >
                            </div>
                            <div className="vector-1">
                                <img src={side1} alt=""/>
                            </div>
                            <div className="vector-2">
                                <img src={side2} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-3 col-lg-3 col-md-3 col-12">
                        <div className="contact-img">
                            <img src={cimg2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSection;