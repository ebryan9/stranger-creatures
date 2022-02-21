import React, {createContext, useState} from "react";
import audio from '../assets/audio/loops_strange.mp3';

// type State = {
//     sound: boolean;
// }

type AudioType = true | false
type AudioContextType = { playing: AudioType; play: () => void; pause: () => void; };

const audioRef = new Audio(audio);

export const initialValues = {
    sound: false,
    play: () => {},
    pause: () => {}
}

export const AudioContext = createContext<AudioContextType>({} as AudioContextType);
 
// function reducer(state: State, action: Action) {
//     switch (action.type) {
//         case "play": 
//             return {
//                 sound: true,
//                 play: () => {
//                     song.play();
//                     song.loop = true;
//                     console.log("!!!!Playing");            
//                 }
//             };
//         case "pause": 
//             return {
//                 sound: false,
//                 pause: () => {
//                     song.pause();
//                     song.loop = false;
//                     console.log("!!!!Paused");            
//                 }
//             };
//         default:
//             return state;
//     }
// }

export const AudioProvider: React.FC = ({ children }) => {
    const [playing, setPlaying] = useState<AudioType>(false);

    // const toggleSound = () => {
    //     setPlaying(playing === false ? true : false);
    //   };
    
    const play = () => {
      setPlaying(true);
      audioRef.play();
      console.log("!!!!!! PLAY");
    };
  
    const pause = () => {
      setPlaying(false);
      audioRef.pause();
      console.log("!!!! PAUSE");
    };

    return <AudioContext.Provider value={{playing, play, pause}}>
                {children}
            </AudioContext.Provider>
}