import React, { useEffect, useState } from "react";
import "./App.css";
import { ITrack } from "./interfaces/Track";
import { Track } from "./components/Track";
import { TrackList } from "./components/TrackList";

interface Resp {
  message: string;
  data: any;
}

function App() {
  const [tracks, setTracks] = useState<ITrack[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch(`/tracks/song/24`);
      const { data } = await response.json();
      console.log(data, "dis data");
      setTracks(data);
    };
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {tracks ? <TrackList tracks={tracks} /> : null}
      </header>
    </div>
  );
}

export default App;
