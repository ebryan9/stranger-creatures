import React from 'react';
import Header from '../common/header/Header';
import SiteBg from '../common/SiteBg/SiteBg';

import avaxPool from '../../assets/img/titles/avaxpool.png';
import usdcPool from '../../assets/img/titles/usdcpool.png';


function Vault() {
    return(
        <>
        <Header />
        <div className="container">
            <SiteBg />
            
            <div className="row welcome">
                <div className="col-md-6 mb-5 relative">
                    <h5 className="text-center">Stake $Blood and earn $AVAX</h5>

                    <div className="brick-bg avax-pool">
                        <h4 className="text-center pool-title">
                            <span className="avax-title">$AVAX Pool</span>
                        </h4>

                        <div className="text-center mt-5 py-5">
                            <h4>0.8942</h4>
                            <p style={{marginTop: "-30px"}}>Earned $AVAX</p>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-8">
                                <div>APR:</div>
                                <div>Your Stake:</div>
                                <div>Your current $BLOOD</div>
                                <div>Your staked $BLOOD</div>
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
                    <h5 className="text-center">Stake $Blood and earn $USDC</h5>

                    <div className="brick-bg usdc-pool">

                        <h4 className="text-center pool-title">
                            <span className="usdc-title">$USDC Pool</span>
                        </h4>

                        <div className="text-center mt-5 py-5">
                            <h4>45.8952</h4>
                            <p style={{marginTop: "-30px"}}>Earned $USDC</p>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-8">
                                <div>APR:</div>
                                <div>Your Stake:</div>
                                <div>Your current $BLOOD</div>
                                <div>Your staked $BLOOD</div>
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