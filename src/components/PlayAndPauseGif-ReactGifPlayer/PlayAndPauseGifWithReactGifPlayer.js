import React, { useState } from "react";
import GifPlayer from "react-gif-player";

const PlayAndPauseGifWithReactGifPlayer = () => {
    const [isPlaying , setIsPlaying] = useState(false)

    return (
        <GifPlayer
            gif={"https://raw.githubusercontent.com/benwiley4000/react-gif-player/master/flip_the_frog.gif"}
            still="https://raw.githubusercontent.com/benwiley4000/react-gif-player/master/flip_the_frog.jpg"
            pauseRef={isPlaying}
            onTogglePlay={ () =>{ setIsPlaying(prev => !prev)}}
        ></GifPlayer>
    );
};


export default PlayAndPauseGifWithReactGifPlayer;