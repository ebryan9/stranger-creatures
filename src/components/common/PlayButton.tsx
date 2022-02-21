import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

import audio from '../../assets/audio/loops_strange.mp3';


function PlayButton() {

    const audioRef = useRef(new Audio(audio));
    const [playing, setPlaying] = useState(false);
    
    const play = () => {
      setPlaying(true);
      audioRef.current.play()
    };
  
    const pause = () => {
      setPlaying(false);
      audioRef.current.pause();
    };
  
    return (
        <>
            <button 
                onClick={playing ? pause : play}
                className="nav-link px-3 link-secondary"
                style={{border: "none", backgroundColor: "transparent", color: "#9b3637", marginTop: "9px", fontSize: "24px"}}>
                 {playing
                    ? <FontAwesomeIcon icon={faVolumeMute} className="bi d-block mx-auto mb-1" width="24" height="24" />
                    : <FontAwesomeIcon icon={faVolumeUp} className="bi d-block mx-auto mb-1" width="24" height="24" />
                }
            
            </button>
        </>
    );
}

export default PlayButton;