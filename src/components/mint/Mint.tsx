import React, { ChangeEvent, useState } from 'react';
import Header from '../common/header/Header';
import SiteBg from '../common/SiteBg/SiteBg';

import { Link } from 'react-router-dom';

import human from '../../assets/img/characters/humant.gif';
import mintNow from '../../assets/img/titles/mintnow.png';

function Mint () {

    const minusSign = "-";

    const [num, setNum]= useState(1);

    const incNum = () => {
        if(num<10) {
        setNum(Number(num)+1);
        }
    };

    const decNum = () => {
        if(num>0) {
            setNum(num - 1);
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNum(parseInt(e.target.value));
    }
    
    return (
        <>
            <Header />

            <div className="container">
                <SiteBg />
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="welcome brick-bg">
                            <div className="row">
                                <div className="px-4 pt-1 pb-4 mt-1 mb-4 text-center">
                                    <h1 className="display-5 fw-bold mint-title-container">
                                        <span className="mint-title">Mint</span>
                                    </h1>
                                    <Link to="/home">
                                        <img className="d-block mx-auto mb-4" src={human} alt="Human" width="299" height="299" />
                                    </Link>
                                    
                                    <div className="col-lg-6 mx-auto">
                                        <div className="col-lg-8 mx-auto">
                                            <div className="input-group mt-5">
                                                <div className="input-group-prepend">
                                                    <button 
                                                        className="btn-default btn-lg" 
                                                        type="button" 
                                                        onClick={decNum}>{minusSign}</button>
                                                </div>
                                                <input type="text" className="form-control text-center" value={num} onChange={handleInputChange} style={{color: "#000"}}/>
                                                <div className="input-group-prepend">
                                                    <button 
                                                        className="btn-default btn-lg" 
                                                        type="button" 
                                                        onClick={incNum}>
                                                            {<span dangerouslySetInnerHTML={{__html: '&#x2b;'}} />}
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-center fw-normal fs-5 mt-3">24.000 $BLOOD</p>
                                        </div>                   
                                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-1">
                                            <Link to="/" className="btn-default btn-lg mt-3 py-3 px-4" style={{fontSize: "1.5rem"}}>
                                                <img src={mintNow} alt="Mint Now" width="174" height="36" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </>
    )
}

export default Mint;