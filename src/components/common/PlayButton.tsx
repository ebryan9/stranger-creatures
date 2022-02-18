import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

import audio from '../../assets/audio/loops_strange.mp3';
import { useLocation } from 'react-router-dom';


function PlayButton() {

    const audioRef = useRef(new Audio(audio));
    const [playing, setPlaying] = useState(true);
    
    const currentWindow: any = useRef(null);
    const location = useLocation();

    const playPause = () => setPlaying(!playing);

    const linkHandler = useCallback(() => {
        
        const url = location.pathname;
        currentWindow.current = window.location.href=`${url}`;
        setPlaying(false);

    }, [location.pathname]);
  
    useEffect(() => {
        playing ? audioRef.current.play() : audioRef.current.pause();
      },
      [playing]
    );

    useEffect(() => {

        let audio = audioRef.current;

        audio.addEventListener('ended', linkHandler);
        return () => {
          audio.removeEventListener('ended', linkHandler);

          if (currentWindow && currentWindow.current) {
              audio.pause();
          }
        };
      }, [linkHandler]);

    return (
        <>
            <button 
                onClick={playPause}
                className="nav-link px-3 link-secondary"
                style={{border: "none", backgroundColor: "transparent", color: "#9b3637", marginTop: "9px", fontSize: "24px"}}>
                {playing
                    ? <FontAwesomeIcon icon={faPause} className="bi d-block mx-auto mb-1" width="24" height="24" />
                    : <FontAwesomeIcon icon={faPlay} className="bi d-block mx-auto mb-1" width="24" height="24" />
                }
            
            </button>
        </>
    );
}

export default PlayButton;