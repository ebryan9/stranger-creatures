import React, { useState } from 'react';
import Header from '../common/header/Header';
import SiteBg from '../common/SiteBg/SiteBg';

import human from '../../assets/img/characters/human.png';
import vampire from '../../assets/img/characters/vampire.png';
import werewolf from '../../assets/img/characters/werewolf.png';
import WerewolfAttack from './werewolf-attack/WerewolfAttack';

import stakeTitle from '../../assets/img/titles/stake.png';
import claim from '../../assets/img/titles/claim.png';
import unstaked from '../../assets/img/titles/unstaked.png';

function Stake () {

    const [stake, setStake] = useState(true);

    const toggleStake = () => {
        setStake(!stake);
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
                                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                                    <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none stake-count">
                                        <h4 className="text-center">
                                            <span className="stake-title">Staked</span> 6
                                        </h4>
                                    </div>
                                    <div className="col-12 col-md-auto mb-2 justify-content-center mb-md-0 stake-count">
                                        <h4 className="text-center">
                                            <span className="unstake-title">Unstaked</span> 0
                                        </h4>
                                    </div>
                                    <div className="col-md-4 text-end">
                                    {stake
                                        ?
                                         <div className="mb-5">
                                                <button 
                                                    type="button" 
                                                    className="btn btn-default me-2">
                                                        <img src={claim} alt="Claim" width="68" height="31" />
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-default"
                                                    onClick={toggleStake}>
                                                        <img src={unstaked} alt="Unstake" width="98" height="31" />
                                                </button>
                                            </div>
                                        :
                                            <div className="mb-5">
                                                <button 
                                                    type="button" 
                                                    className="btn btn-default"
                                                    onClick={toggleStake}>
                                                        <img src={stakeTitle} alt="Stake" width="68" height="31" />
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </div>                            
                            </div>

                            <div className="row mb-5">
                                <div className="col-12">
                                    <h3 className="stake-faction-title">
                                        <span className="hstake-title"></span> 
                                        <span className="nft-count">- 1</span>
                                    </h3>

                                    <div className="nft-container row align-items-start">
                                        <div className="nft col">
                                            <img src={human} alt="Human" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-12">
                                    <h3 className="stake-faction-title">
                                        <span className="vstake-title"></span>
                                        <span className="nft-count">- 1</span>
                                    </h3>
                                    <div className="nft-container row align-items-start">
                                        <div className="nft col">
                                            <img src={vampire} alt="Vampire" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-12">
                                    <h3 className="stake-faction-title">
                                        <span className="wstake-title"></span>
                                        <span className="nft-count">- 4</span>
                                    </h3>
                                    <div className="nft-container row align-items-start">
                                        <div className="nft col">
                                            <img src={werewolf} alt="Werewolf" />
                                        </div>
                                        <div className="nft col">
                                            <img src={werewolf} alt="Werewolf" />
                                        </div>
                                        <div className="nft col">
                                            <img src={werewolf} alt="Werewolf" />
                                        </div>
                                        <div className="nft col">
                                            <img src={werewolf} alt="Werewolf" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <WerewolfAttack />

                        </div>
                    </div>
                </div>
            </div>                
        </>
    )
}

export default Stake;