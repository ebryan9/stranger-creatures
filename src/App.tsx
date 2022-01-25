import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import enter from './assets/img/enter-the-castle.png';
import Home from './components/home/Home';
import Game from './components/game/Game';
import SiteBg from './components/common/SiteBg/SiteBg';

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
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </>
  );
}

export default App;
