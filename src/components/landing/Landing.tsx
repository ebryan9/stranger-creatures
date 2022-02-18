import enter from '../../assets/img/enter-the-castle.png';
import SiteBg from '../common/SiteBg/SiteBg';

import React,  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ReactAudioPlayer from 'react-audio-player';

import audio from '../../assets/audio/start_strange.mp3';

function Landing() {

    const [mute, setMute] = useState(false);

    const pause = () => {
        setMute(true);
    }
  
    return (
        <>
      <div className="container">
        <div className="row">
          <SiteBg />
          <div>
            <Link to="/home" onClick={pause}>
              <img src={enter} className="centered" alt="Enter the Castle" style={{maxWidth: "450px", maxHeight: "450px" }}/>
            </Link>

                <ReactAudioPlayer
                    src={audio}
                    autoPlay={true}
                    loop={true}
                    controls={true}
                    muted={mute}
                    style={{visibility: "hidden"}}
                />
          </div>
        </div>
      </div>
        
        </>
    );

}

export default Landing;