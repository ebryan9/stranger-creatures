import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons'


function PlayButton(props: { playing: boolean, play: any, pause: any}) {

    return (
        <>
            <div className="play-button-container">
                <div className="row mt-5 landing-btn-container">
                    <div className="col-md-12 text-end">
                        <button 
                            onClick={props.playing ? props.pause : props.play}
                            className="nav-link px-3 link-secondary"
                            style={{position: "relative", border: "none", backgroundColor: "transparent", color: "#9b3637", marginTop: "9px", fontSize: "24px", zIndex: "2000"}}>
                            {props.playing
                                ? <FontAwesomeIcon icon={faVolumeMute} className="bi d-block mx-auto mb-1" width="24" height="24" />
                                : <FontAwesomeIcon icon={faVolumeUp} className="bi d-block mx-auto mb-1" width="24" height="24" />
                            }
                        
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlayButton;