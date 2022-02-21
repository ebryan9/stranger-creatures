import React, {createContext} from "react";
import audio from '../assets/audio/loops_strange.mp3';

const audioRef = new Audio(audio);

export const initialValues = {
    sound: audioRef,
    play: () => {},
    pause: () => {}
}

export const AudioContext = createContext(audioRef);
 
export const AudioProvider: React.FC = ({ children }) => {

    return <AudioContext.Provider value={audioRef}>
                {children}
            </AudioContext.Provider>
}
