import React, {useEffect} from 'react'
import cimg from '../../images/contact/img-5.png'
import cimg2 from '../../images/contact/img-5.png'
import side1 from '../../images/contact/1.png'
import side2 from '../../images/contact/2.png'
import shape1 from '../../images/contact/1.png'
import shape2 from '../../images/contact/2.png'
import RSVPFrom from '../RSVPFrom/RSVPFrom'


const RsvpSection = (props) => {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.innerHTML = `
    //       (function(h,b,s,n,i,p,e,t) {
    //         h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
    //         t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
    //         e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
    //       })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","63c87e713ebfde0006dc9ba7");
    //     `;
    //     document.body.appendChild(script);
    
    //     return () => {
    //       document.body.removeChild(script);
    //     };
    //   }, []);

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
                                <RSVPFrom/>
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