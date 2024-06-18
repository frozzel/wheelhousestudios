
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


const VideoModal = () => {
  
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='vimeo' autoplay isOpen={isOpen} videoId="958151691" onClose={() => setOpen(false)} />

      <div className="video-btn">
        <ul>
          <li>

            <button className="wrap" onClick={() => setOpen(true)}><i className="fi flaticon-play" aria-hidden="true"></i></button>
          </li>
        </ul>
      </div>
      {/* <div style={{padding:"56.25% 0 0 0", position:"relative"}}><iframe src="https://player.vimeo.com/video/958151691?h=aab7d454a6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%"}} title="Introduction Video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}

    </React.Fragment>
  )
}

export default VideoModal;