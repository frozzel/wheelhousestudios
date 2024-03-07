import React from 'react'
import sImg1 from '../../images/slider/shape.png'
import sImg2 from '../../images/slider/shape2.png'
import TimeCountDown from '../countdown'
import Slide from 'react-reveal/Slide';


const WeddingDate = (props) => {

    return (
        <section className={`wpo-wedding-date ${props.dtClass}`}>
            <div className="container">
                <Slide bottom cascade>
                    <h2>
                        <span className="shape-1"><img src={sImg1} alt="" /></span>
                        Esabella & William
                        <span className="shape-2"><img src={sImg2} alt="" /> </span>
                    </h2>
                    <p>We Are Getting Married November 15,2022</p>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="clock-grids">
                                <TimeCountDown />
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    )
}

export default WeddingDate;