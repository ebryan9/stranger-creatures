import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <div className="header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-5 py-3 mb-4">
            <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <Link to="/whitepaper" className="btn-default btn-whitepaper">Whitepaper</Link>
            </div>

            <ul className="nav strange-nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" style={{fontSize: "16px"}}>
                <li>
                    <Link to="/home" className="nav-link px-3 link-secondary">Home</Link>
                </li>
                <li>
                    <Link to="/mint" className="nav-link px-3 link-secondary">Mint</Link>
                </li>
                <li>
                    <Link to="/stake" className="nav-link px-3 link-secondary">Stake</Link>
                </li>
                <li>
                    <a href="https://twitter.com/GameCreatures" className="nav-link px-3 link-secondary" style={{fontSize: "20px"}} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="bi d-block mx-auto mb-1" width="24" height="24" />
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/st4zfuSCBp" className="nav-link px-3 link-secondary" style={{fontSize: "20px"}} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faDiscord} className="bi d-block mx-auto mb-1" width="24" height="24" />
                    </a>
                </li>
            </ul>

            <div className="col-md-3 text-end">
                <input type="button" className="btn-default btn-blood" value="Buy $Blood" />
            </div>
        </div>
        </>
    );
}

export default Header;


