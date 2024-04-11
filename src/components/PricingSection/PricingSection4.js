import React from 'react'
import { Link } from 'react-router-dom'
import pImg from '../../images/pricing/p-shape.svg'
import SectionTitle from '../SectionTitle'
import './index.css'

const Pricing = [
   {
        pakage: 'Basic Package',
        price: '200',
        subs: '1-2 hours',
        l1: 'Video ready within 6-8 weeks',
        l2: '2 to 5 minute video',
        // l3: '4k download',
        // l4: 'Manicure & Pedicure',
        // l5: 'Full body Polish'
    },
    {
        pakage: 'Standard Package',
        price: '500',
        subs: 'half day',
        l1: 'Video ready within 6-8 weeks',
        l2: '5 to 7 minute video',
        // l3: '4k download',
        // l4: 'Drone Footage',
        // l5: 'Full body Polish'
    },
    
]


const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

const PricingSection4 = (props) => {

    return (
        <section className={`wpo-pricing-section section-padding pt-5 ${props.pvClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Choose Your'} MainTitle={'Videography Short Session'} desc={'Senior Photos, Maternity, Portrait Sessions'}/>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {Pricing.map((pricing, pitem) => (

                            <div className="col col-lg-4 col-md-6 col-12" key={pitem}>
                                <div className="wpo-pricing-item">
                                    <div className="wpo-pricing-top">
                                        <div className="wpo-pricing-text">
                                            <h4>{pricing.pakage}</h4>
                                            <h2>${pricing.price}<span>/{pricing.subs}</span></h2>
                                        </div>
                                    </div>
                                    <div className="shape"><img src={pImg} alt=""/></div>
                                    <div className="wpo-pricing-bottom">
                                        <div className="wpo-pricing-bottom-text mb-4">
                                            <ul>
                                                <li>{pricing.l1}</li>
                                                <li>{pricing.l2}</li>
                                                <li>{pricing.l3}</li>
                                                <li>{pricing.l4}</li>
                                                <li>{pricing.l5}</li>
                                            </ul>
                                            <Link onClick={ClickHandler} className="theme-btn" to="/contact">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection4;