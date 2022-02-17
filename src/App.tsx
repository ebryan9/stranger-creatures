import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import enter from './assets/img/enter-the-castle.png';
import Home from './components/home/Home';
import Game from './components/game/Game';
import SiteBg from './components/common/SiteBg/SiteBg';
import Mint from './components/mint/Mint';
import Stake from './components/stake/Stake';
import Whitepaper from './components/whitepaper/Whitepaper';
import Vault from './components/vault/Vault';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <SiteBg />
          <div>
            <Link to="/home">
              <img src={enter} className="centered" alt="Enter the Castle" style={{maxWidth: "450px", maxHeight: "450px" }}/>
            </Link>
              {/* <img src={enter} className="centered" alt="Enter the Castle" style={{maxWidth: "450px", maxHeight: "450px" }}/> */}
          </div>
        </div>
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
