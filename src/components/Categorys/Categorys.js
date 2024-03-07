import React from "react";
import { Link } from 'react-router-dom'
import cImg1 from '../../images/category/1.jpg'
import cImg2 from '../../images/category/2.jpg'
import cImg3 from '../../images/category/3.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Categorys = () => {
    return (

        <section className="wpo-category-section">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="wpo-category-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <img src={cImg1} alt=""/>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} to="/shop">Wedding Shoes</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <img src={cImg2} alt=""/>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} to="/shop">Wedding Cake</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="wpo-category-item">
                                <div className="wpo-category-img">
                                    <img src={cImg3} alt=""/>
                                </div>
                                <div className="wpo-category-text">
                                    <Link onClick={ClickHandler} to="/shop">Wedding bouquet</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categorys;