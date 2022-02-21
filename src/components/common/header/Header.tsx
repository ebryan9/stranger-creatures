import React, { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import PlayButton from '../PlayButton';
import whitepaper from '../../../assets/img/titles/whitepaper.png';
import buy from '../../../assets/img/titles/buyblood.png';

// import audio from '../../../assets/audio/loops_strange.mp3';

import { AudioContext } from "../../../state/AudioContext";

function Header() {

    // const useAudio = useContext(AudioContext);
    const audioRef = useRef(useContext(AudioContext));
    const [playing, setPlaying] = useState(false);
    
    const play = () => {
      setPlaying(true);
      audioRef.current.play()
      audioRef.current.loop = true;
    };
  
    const pause = () => {
      setPlaying(false);
      audioRef.current.pause();
      audioRef.current.loop = false;
    };
  
    // useEffect(() => {   
    //     if (playing === false) {
    //         audioRef.current.pause();
    //     }     
    //     setPlaying(true);
    //     audioRef.current.play();
    //     audioRef.current.loop = true;

    // }, [])

    useEffect(() => {
        return () => {
            setPlaying(false);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            audioRef.current.pause()
            console.log("in cleanup")
        }
    }, [])
    
    return (
        <>
        <div className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-5 py-3 mb-4">
            <div className="d-flex align-items-center col-md-2 mb-2 mb-md-0 text-dark text-decoration-none">
                <Link to="/whitepaper"
                    className="btn-default btn-whitepaper"
                    >
                    <img src={whitepaper} alt="Whitepaper" width="116" height="24" />
                </Link>
            </div>

            <ul className="nav strange-nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" style={{fontSize: "16px"}}>
                <li>
                    <Link to="/home"
                    className="nav-link px-3 link-secondary"
                    >
                        <span className="home">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/mint"
                        className="nav-link px-3 link-secondary"
                        >
                        <span className="mint">Mint</span>
                    </Link>
                </li>
                <li>
                    <Link to="/stake"
                        className="nav-link px-3 link-secondary"
                        >
                        <span className="stake">Stake</span>
                    </Link>
                </li>
                <li>
                    <Link to="/vault"
                        className="nav-link px-3 link-secondary"
                        >
                        <span className="vault">Vault</span>
                    </Link>
                </li>
                <li>
                    <a href="https://twitter.com/GameCreatures" className="nav-link px-3 link-secondary" style={{marginTop: "9px", fontSize: "24px"}} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="bi d-block mx-auto mb-1" width="24" height="24" />
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/st4zfuSCBp" className="nav-link px-3 link-secondary" style={{marginTop: "9px", fontSize: "24px"}} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faDiscord} className="bi d-block mx-auto mb-1" width="24" height="24" />
                    </a>
                </li>

                <li>
                    <PlayButton playing={playing} play={play} pause={pause}/>
                </li>
            </ul>

            <div className="col-md-2 text-end">
                <a href="/" className="btn-default btn-blood">
                    <img src={buy} alt="Buy Now" width="116" height="24" />
                </a>
            </div>
        </div>
        </>
    );
}

export default Header;


