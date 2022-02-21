import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'


function PlayButton(props: { playing: boolean, play: any, pause: any}) {

    return (
        <>
            <button 
                onClick={props.playing ? props.pause : props.play}
                className="nav-link px-3 link-secondary"
                style={{border: "none", backgroundColor: "transparent", color: "#9b3637", marginTop: "9px", fontSize: "24px"}}>
                 {props.playing
                    ? <FontAwesomeIcon icon={faVolumeMute} className="bi d-block mx-auto mb-1" width="24" height="24" />
                    : <FontAwesomeIcon icon={faVolumeUp} className="bi d-block mx-auto mb-1" width="24" height="24" />
                }
            
            </button>
        </>
    );
}

export default PlayButton;