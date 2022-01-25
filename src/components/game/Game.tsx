import React from 'react';
import Header from '../common/header/Header';
import SiteBg from '../common/SiteBg/SiteBg';

import eyes from '../../assets/img/bg/eyes.gif';
import { Link } from 'react-router-dom';

function Game() {
    return(
        <>
        <Header />
        <div className="container">
            <SiteBg />
            <div className="row">
                <div className="col-md-12 mb-5 relative">
                    <Link to="/home">
                        <img src={eyes} className="centered" alt="Enter the Castle" style={{maxWidth: "450px", maxHeight: "450px" }}/>
                    </Link>
                    <div style={{position: "fixed", top: "80%", left: "50%", transform: "translate(-50%, -50%)"}}>
                        <button type="button" className="btn-default text-uppercase">Connect Wallet</button>
                    </div>

                </div>

            </div>
        </div>
        </>
    );
}

export default Game;