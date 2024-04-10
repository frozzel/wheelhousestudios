import React from 'react'
import { Link } from 'react-router-dom'
import pImg from '../../images/pricing/p-shape.svg'
import SectionTitle from '../SectionTitle'
import './index.css'

const Pricing = [
    {
        pakage: 'Basic Package',
        price: '1500',
        subs: '6 hours',
        l1: 'Photos ready within 6-8 weeks online gallery',
        l2: '',
        l3: '',
        l4: '',
        l5: ''
    },
    {
        pakage: 'Standard Package',
        price: '2000',
        subs: '6-8 hours',
        l1: 'Photos ready within 6-8 weeks online gallery',
        l2: 'Engagement session',
        // l3: 'Amazing meal & breakfast',
        // l4: 'Manicure & Pedicure',
        // l5: 'Full body Polish'
    },
    {
        pakage: 'Luxury Package',
        price: '2500',
        subs: '10 hours',
        l1: 'Photos ready within 6-8 weeks online gallery',
        l2: 'Second Photographer',
        l3: 'Engagement session',
        // l4: 'Manicure & Pedicure',
        // l5: 'Full body Polish'
    },
  
]


const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

const PricingSection = (props) => {

    return (
        <section className={`wpo-pricing-section section-padding ${props.pvClass}`}>
            <div className="container">
                <SectionTitle subTitle={'Choose Your'} MainTitle={'Wedding Photography'} />
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

export default PricingSection;