import React from "react";

const Game = () => {
 
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://pigplatformer.web.app"
        title="Pig Platformer Game"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Game;
