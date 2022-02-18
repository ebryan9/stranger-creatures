import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Game from './components/game/Game';
import Mint from './components/mint/Mint';
import Stake from './components/stake/Stake';
import Whitepaper from './components/whitepaper/Whitepaper';
import Vault from './components/vault/Vault';
import Landing from './components/landing/Landing';

// import { AudioContext } from "./state/AudioContext";

// import audio from './assets/audio/loops_strange.mp3';
// import audioLanding from './assets/audio/loops_strange.mp3';


function App() {


  return (
    <>
      <Landing />
      <Routes>
          <Route path="/" element={<Landing />} />
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
