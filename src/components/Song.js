import React from "react";
import Wether from "./Wether";

export default function Song({ currentSong }) {
  return (
    <div className="song-container">
      <div className="wether">
        <img alt={currentSong.name} src={currentSong.cover}></img>
        <Wether />
      </div>
      <h2 className="song-name">{currentSong.name}</h2>
      <h3 className="song-artist">{currentSong.artist}</h3>
    </div>
  );
}
