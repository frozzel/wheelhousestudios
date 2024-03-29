import React, {useEffect} from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `
          (function(h,b,s,n,i,p,e,t) {
            h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
            t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
            e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
          })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","63c87e713ebfde0006dc9ba7");
        `;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-maps-and-flags"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Coverage Area</h2>
                                            <p>Atlanta and Surrounding </p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon ">
                                            <div className="icon">
                                                <i className="fi flaticon-email "></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>admin@wheelhousestudios.org</p>
                                            {/* <p>helloyou@gmail.com</p> */}
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>+1 (404) 596-1225</p>
                                            {/* <p>+1 800 123 654 987</p> */}
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>Feel free to reach out with any inquiries or concerns!</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <div className="hb-p-63c87e713ebfde0006dc9ba7-1"></div>
                            <img height="1" width="1" style={{display: "none"}} src="https://www.honeybook.com/p.png?pid=63c87e713ebfde0006dc9ba7"/>
        
    
                            {/* <ContactForm/> */}
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53074.22260861468!2d-84.41722288884769!3d33.75707604262928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1709829448907!5m2!1sen!2sus"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
