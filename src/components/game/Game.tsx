import React from 'react';
import Header from '../common/header/Header';
import EyesBg from '../common/SiteBg/EyesBg';

// import eyes from '../../assets/img/bg/eyes.gif';
import human from '../../assets/img/characters/humant.gif';

import { Link } from 'react-router-dom';

function Game() {
    return(
        <>
        <Header />
        <div className="container">
            <EyesBg />
            <div className="row">
                <div className="col-md-12 mb-5 relative">
                    <Link to="/home">
                        <img src={human} className="centered game-human" alt="Enter the Castle" />
                    </Link>
                    <div style={{position: "fixed", top: "85%", left: "50%", transform: "translate(-50%, -50%)"}}>
                        <button type="button" className="btn-default text-uppercase">Connect Wallet</button>
                    </div>

                </div>

            </div>
        </div>
        </>
    );
}

export default Game;