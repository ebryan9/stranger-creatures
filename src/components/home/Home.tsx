import React from 'react';
import Header from '../common/header/Header';
import SiteBg from '../common/SiteBg/SiteBg';
import human from '../../assets/img/characters/humant.gif';
import vampire from '../../assets/img/characters/vampiret.gif';
import werewolf from '../../assets/img/characters/werewolft.gif';
import blood from '../../assets/img/characters/tokenGIFx10.gif';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Header />

            <div className="container">
                <SiteBg />
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="welcome brick-bg">
                            <div className="row">
                                <div className="col-md-4 mx-auto">
                                    <h1 className="text-center">Welcome</h1>
                                    <img src={human} alt="Human" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <Link
                                        to="/game" 
                                        className="btn-default text-center mt-4 px-3 py-3" 
                                        style={{display: "block", width: "300px", margin: "0 auto", fontSize: "20px"}}>
                                            Let's Hunt
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row characters mb-5">
                    <div className="row mb-1">
                        <div className="col-12">
                            <div className="character transparent-bg">
                                <h3 className="text-center faction-title">
                                    <span className="factions">Factions</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="character brick-bg">
                            <h3 className="text-center">
                                <span className="humans">Humans</span>
                            </h3>
                            <img src={human} alt="Human" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="character brick-bg">
                            <h3 className="text-center">
                                <span className="vampires">Vampires</span>
                            </h3>
                            <img src={vampire} alt="Vampire" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="character brick-bg">
                            <h3 className="text-center">
                                <span className="werewolves">Werewolves</span>
                            </h3>
                            <img src={werewolf} alt="Werewolf" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="character brick-bg">
                            <h3 className="text-center">
                                <span className="blood">$BLOOD</span>
                            </h3>
                            <img src={blood} alt="Blood" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;