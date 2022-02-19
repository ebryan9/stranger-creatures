import React from 'react';
import Header from '../common/header/Header';
import SiteBg from '../common/SiteBg/SiteBg';


function Vault() {
    return(
        <>
        <Header />
        <div className="container">
            <SiteBg />
            
            <div className="row welcome">
                <div className="col-md-6 mb-5 relative">
                    <h5 className="text-center">Stake <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}><em>$</em></span>Blood and earn <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}><em>$</em></span>AVAX</h5>

                    <div className="brick-bg avax-pool">
                        <h4 className="text-center pool-title">
                            <span className="avax-title"><em>$</em>AVAX Pool</span>
                        </h4>

                        <div className="text-center mt-5 py-5">
                            <h4>0.8942</h4>
                            <p style={{marginTop: "-30px"}}>Earned <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "18px"}}><em>$</em></span>AVAX</p>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-8">
                                <div>APR:</div>
                                <div>Your Stake:</div>
                                <div>Your current <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "18px"}}><em>$</em></span>BLOOD</div>
                                <div>Your staked <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "18px"}}><em>$</em></span>BLOOD</div>
                            </div>
                            <div className="col-md-4 text-end">
                                <div>x%</div>
                                <div>x</div>
                                <div>x</div>
                                <div>x</div>

                            </div>
    
                        </div>

                    </div>

                </div>

                <div className="col-md-6 mb-5 relative">
                    <h5 className="text-center">Stake <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}><em>$</em></span>Blood and earn <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "25px"}}><em>$</em></span>USDC</h5>

                    <div className="brick-bg usdc-pool">

                        <h4 className="text-center pool-title">
                            <span className="usdc-title"><em>$</em>USDC Pool</span>
                        </h4>

                        <div className="text-center mt-5 py-5">
                            <h4>45.8952</h4>
                            <p style={{marginTop: "-30px"}}>Earned <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "18px"}}><em>$</em></span>USDC</p>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-8">
                                <div>APR:</div>
                                <div>Your Stake:</div>
                                <div>Your current <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "18px"}}><em>$</em></span>BLOOD</div>
                                <div>Your staked <span style={{fontFamily: "'Poppins', sans-serif", fontSize: "18px"}}><em>$</em></span>BLOOD</div>
                            </div>
                            <div className="col-md-4 text-end">
                                <div>x%</div>
                                <div>x</div>
                                <div>x</div>
                                <div>x</div>

                            </div>
    
                        </div>

                    </div>


                </div>
    

            </div>
        </div>
        </>
    );
}

export default Vault;