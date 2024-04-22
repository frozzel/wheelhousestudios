import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    const sectionStyle = {
    background: `url(${props.img}) no-repeat center top / cover`,
	minHeight: "360px",
	position: "relative",
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	zIndex: 1,
    }
    return(
        <section className="wpo-page-title">
            <div className="">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap " style={sectionStyle}>
                            <h2>{props.pageTitle}</h2>
                            <ol className="wpo-breadcumb-wrap ">
                                <li><Link to="/home">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;