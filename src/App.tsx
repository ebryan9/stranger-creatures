import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

import Home from './components/home/Home';
import Game from './components/game/Game';
import Mint from './components/mint/Mint';
import Stake from './components/stake/Stake';
import Whitepaper from './components/whitepaper/Whitepaper';
import Vault from './components/vault/Vault';
import LandingPlayButton from './components/common/LandingPlayButton';

import enter from './assets/img/enter-the-castle.png';
import SiteBg from './components/common/SiteBg/SiteBg';


function App() {
  const location = useLocation();
  const hideBtn = 
    location.pathname.includes("/home") || 
    location.pathname.includes("/mint") || 
    location.pathname.includes("/stake") || 
    location.pathname.includes("/vault") || 
    location.pathname.includes("/whitepaper") ? null : <LandingPlayButton />;

  return (
    <>
    <div className="container">
      <div className="row">
        <SiteBg />

        <div>
          <Link to="/home">
            <img src={enter} className="centered" alt="Enter the Castle" style={{maxWidth: "450px", maxHeight: "450px" }} />
          </Link>

        </div>
      </div>

      {hideBtn}

    </div>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </>
  );
}

export default App;
