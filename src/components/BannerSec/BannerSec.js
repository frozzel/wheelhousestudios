import React from 'react'
import VideoModal from '../VideoSection2'
const BannerSec = (props) => {
    return(
        <section className=" mb-10">
            {/* <h4>We Are Waiting To Celebrate Your Love</h4> */}
            {/* <h4>This is Where your about video goes</h4> */}
            {/* wpo-banner-section */}
            <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/958151691?h=aab7d454a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}} title="Introduction Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

            {/* <VideoModal/> */}
        </section>
    )
}

export default BannerSec;