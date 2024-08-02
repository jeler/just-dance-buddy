import React, { useEffect, useState } from "react";
import "./App.css";
import { ITrack } from "./interfaces/Track";
import { TrackList } from "./components/TrackList";

interface Resp {
  message: string;
  data: any;
}

function App() {
  const [tracks, setTracks] = useState<ITrack[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      // Static value for testing display
      const response = await fetch(`/tracks/song/24`);
      const { data } = await response.json();
      setTracks(data);
    };
    fetchSongs();
  }, []);

  return (
    // <div className="container h-screen">
    // <div className="grid-flow-row grid-row-2 px-0 h-screen">
    // container is a reserved class hence using outer-container
    <div className="outer-container">
      <div className="header">Header</div>
      <div className="left-sidebar">Just Dance Buddy</div>
      <div className="main">
        {tracks ? <TrackList tracks={tracks} /> : "Search for Tracks"}
      </div>
      <div className="right-sidebar">Right Sidebar</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
