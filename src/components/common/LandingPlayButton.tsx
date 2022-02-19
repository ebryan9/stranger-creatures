import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'

import audio from '../../assets/audio/start_strange.mp3';


function LandingPlayButton() {

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
            <div style={{position: "fixed", width: "100%", top: "0", left: "0", zIndex: "20"}}>
                <div className="row mt-5 landing-btn-container">
                    <div className="col-md-12 text-end">
                    <button 
                            onClick={playing ? pause : play}
                            className="btn"
                            style={{position: "relative", width: "310px", border: "none", backgroundColor: "transparent", color: "#9b3637", fontSize: "20px", zIndex: "20"}}>
                            {playing
                                ? <FontAwesomeIcon icon={faVolumeMute} className="bi d-block mx-auto mb-1" width="24" height="24" />
                                : <FontAwesomeIcon icon={faVolumeUp} className="bi d-block mx-auto mb-1" width="24" height="24" />
                            }
                            {playing
                                ? "Pause Audio"
                                : "Play Audio"
                            }

                        
                    </button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPlayButton;