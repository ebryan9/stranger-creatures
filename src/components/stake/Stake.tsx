import React, { useState } from 'react';
import Header from '../common/header/Header';
import SiteBg from '../common/SiteBg/SiteBg';

import human from '../../assets/img/characters/human.png';
import vampire from '../../assets/img/characters/vampire.png';
import werewolf from '../../assets/img/characters/werewolf.png';

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
                                    <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                                        <h4 className="text-center white">Staked - 6</h4>
                                    </div>
                                    <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                                        <h4 className="text-center white">Unstaked - 0</h4>
                                    </div>
                                    <div className="col-md-3 text-end">
                                    {stake
                                        ?
                                         <div className="mb-5">
                                                <button 
                                                    type="button" 
                                                    className="btn btn-default me-2">Claim
                                                </button>
                                                <button 
                                                    type="button" 
                                                    className="btn btn-default"
                                                    onClick={toggleStake}>
                                                        Unstake
                                                </button>
                                            </div>
                                        :
                                            <div className="mb-5">
                                                <button 
                                                    type="button" 
                                                    className="btn btn-default"
                                                    onClick={toggleStake}>Stake
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </div>                            
                            </div>

                            <div className="row mb-5">
                                <div className="col-12">
                                    <h3>Humans - 1</h3>

                                    <div className="nft-container row align-items-start">
                                        <div className="nft col">
                                            <img src={human} alt="Human" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-12">
                                    <h3>Vampires - 1</h3>
                                    <div className="nft-container row align-items-start">
                                        <div className="nft col">
                                            <img src={vampire} alt="Vampire" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-12">
                                    <h3>Werewolfs - 4</h3>
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
                            
                            <div className="werewolf-attack-container">
                                <div className="row mt-5 white">
                                    <h4 className="text-center">
                                        Werewolf's Attack Interface
                                    </h4>
                                    <div className="col-md-3">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <img src={werewolf} className="img-thumbnail" alt="Werewolf" style={{width: "200px"}} />
                                            </div>
                                            <div className="col-md-5 mt-4">
                                                <p>Werewolf #xxxx</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 mt-4">
                                            <div style={{display: "inline-block", width: "50%"}}>0</div>
                                                <div style={{display: "inline-block", width: "50%"}} className="text-end">5</div>
                                                <div className="progress">
                                                    <div className="progress-bar border-end" style={{width: "20%"}}>1</div>
                                                    <div className="progress-bar border-end" style={{width: "20%"}}>2</div>
                                                    <div className="progress-bar border-end" style={{width: "0%"}}>3</div>
                                                    <div className="progress-bar border-end" style={{width: "0%"}}>4</div>
                                                    <div className="progress-bar" style={{width: "0%"}}>5</div>                                            
                                                </div>                                    
                                            </div>
                                            <div className="col-md-4 text-md-end mt-md-5">
                                                <p>40<span dangerouslySetInnerHTML={{__html: '&#37;'}} /> of success</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="text-md-end mt-5 me-3">23:59:59 (cooldown)</p>
                                    </div>
                                </div>

                                <div className="row mt-5 white">
                                    <div className="col-md-3">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <img src={werewolf} className="img-thumbnail" alt="Werewolf" style={{width: "200px"}} />
                                            </div>
                                            <div className="col-md-5 mt-4">
                                                <p>Werewolf #xxxx</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 mt-4">
                                                <div style={{display: "inline-block", width: "50%"}}>0</div>
                                                <div style={{display: "inline-block", width: "50%"}} className="text-end">5</div>
                                                <div className="progress">
                                                    <div className="progress-bar border-end" style={{width: "20%"}}>1</div>
                                                    <div className="progress-bar border-end" style={{width: "20%"}}>2</div>
                                                    <div className="progress-bar border-end" style={{width: "20%"}}>3</div>
                                                    <div className="progress-bar border-end" style={{width: "0%"}}>4</div>
                                                    <div className="progress-bar" style={{width: "0%"}}>5</div>                                            
                                                </div>                                    
                                            </div>
                                            <div className="col-md-4 text-md-end mt-md-5">
                                                <p>60<span dangerouslySetInnerHTML={{__html: '&#37;'}} /> of success</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-md-end">
                                        <button 
                                            type="button" 
                                            className="btn btn-default me-2 mt-4">Attack
                                        </button>
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

export default Stake;