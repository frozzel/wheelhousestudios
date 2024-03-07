import React from 'react'
import pImg1 from '../../images/portfolio/18.jpg'
import pImg2 from '../../images/portfolio/19.jpg'
import pImg3 from '../../images/portfolio/21.jpg'
import pImg4 from '../../images/portfolio/20.jpg'
import pImg5 from '../../images/portfolio/22.jpg'
import pImg6 from '../../images/portfolio/26.jpg'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import SectionTitle from '../SectionTitle'


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
    }

]

const PortfolioSectionS3 = (props) => {
    return (

        <section className={`wpo-portfolio-section-s5 section-padding ${props.prClass}`} id="gallery">
            <div className="container">
                <SectionTitle subTitle={'Sweet Memories'} MainTitle={'Our Captured Moments'} />
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
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

export default PortfolioSectionS3;