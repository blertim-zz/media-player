import React from "react";

export default function LibrarySong({
  song,
  songs,
  setCurrentSong,
  audioRef,
  setSongs,
  id,
}) {
  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === song.id);
    await setCurrentSong(selectedSong[0]);
    const newSongs = songs.map((songId) => {
      if (songId.id === id)
        return {
          ...songId,
          active: true,
        };
      else {
        return {
          ...songId,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (audioRef) audioRef.current.play();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}
