import React from 'react';

import werewolf from '../../../assets/img/characters/werewolf.png';
import attack from '../../../assets/img/titles/atack.png';

function WerewolfAttack() {
    return (
        <>
            <div className="werewolf-attack-container">
                <div className="row mt-5">
                    <div className="col-md-4 mx-auto">
                        <h4>
                            <span className="wattack-title"></span> 
                            <span className="attack-title"></span>
                        </h4>

                    </div>
                </div>
                <div className="row mt-5 white">
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-7">
                                <img src={werewolf} className="img-thumbnail" alt="Werewolf" style={{width: "200px"}} />
                            </div>
                            <div className="col-md-5 mt-4">
                                <p>Werewolf #2000</p>
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
                                <p>Werewolf #100</p>
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
                            className="btn btn-default me-2 mt-4">
                                <img src={attack} alt="Buy Now" width="69" height="31" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WerewolfAttack;