import React from 'react'
import pImg1 from '../../images/portfolio/12.jpg'
import pImg2 from '../../images/portfolio/13.jpg'
import pImg3 from '../../images/portfolio/15.jpg'
import pImg4 from '../../images/portfolio/24.jpg'
import pImg5 from '../../images/portfolio/14.jpg'
import pImg6 from '../../images/portfolio/17.jpg'
import pImg7 from '../../images/portfolio/25.jpg'
import pImg8 from '../../images/portfolio/16.jpg'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const Portfolios = [
    {
        Pimg: pImg1,
    },
    {
        Pimg: pImg2,
    },
    {
        Pimg: pImg3,
    },
    {
        Pimg: pImg4,
    },
    {
        Pimg: pImg5,
    },
    {
        Pimg: pImg6,
    },
    {
        Pimg: pImg7,
    },
    {
        Pimg: pImg8,
    },

]

const PortfolioSectionS2 = (props) => {
    return (

        <section className={`wpo-portfolio-section-s2 section-padding ${props.prClass}`} id="gallery">
            <div className="container-fluid">
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
                                    <Masonry columnsCount={4} gutter="30px">
                                        {Portfolios.map((image, i) => (
                                            <div className="grid" key={i}>
                                                <div className="img-holder">
                                                    <ReactFancyBox thumbnail={image.Pimg} image={image.Pimg} style={{ width: "100%", display: "block" }} />
                                                </div>
                                            </div>
                                        ))}
                                    </Masonry>
                                </ResponsiveMasonry>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSectionS2;