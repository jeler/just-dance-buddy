import React, { useEffect, useState } from "react";
import "./App.css";
import { ITrack } from "./interfaces/Track";
import { TrackList } from "./components/TrackList";
import { Search } from "./components/Search";
import { getTracksBySongId } from "./api/tracks";

interface Resp {
  message: string;
  data: any;
}

const fetchFilteredSongs = async (searchItem) => {
  if (searchItem !== null) {
    const response = await fetch(`/songs/search/?artist=${searchItem}`);
    const { data } = await response.json();
    return data;
  }
};

function App() {
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [searchItem, setSearchItem] = useState(null);
  const [error, hasError] = useState(false);
  const [noData, hasData] = useState(true);

  const handleSearchItem = (rawInput) => {
    setSearchItem(rawInput.value);
  };

  useEffect(() => {
    if (searchItem != null) {
      fetchFilteredSongs(searchItem).then(async (songs) => {
        if (songs.length > 0) {
          const res = await getTracksBySongId(songs[0].song_id);
          if (res) {
            console.log(res.data);
            setTracks(res.data);
          } else {
            console.log(res.error);
          }
        }
        hasError(true);
      });
    }
  }, [searchItem]);

  return (
    // container is a reserved class hence using outer-container
    <div className="outer-container">
      <div className="header">Header</div>
      <div className="left-sidebar">Just Dance Buddy</div>
      <div className="main">
        Search Term: {searchItem}
        <Search setSearchItem={handleSearchItem} />
        {tracks ? <TrackList tracks={tracks} /> : "Search for Tracks"}
      </div>
      <div className="right-sidebar">Right Sidebar</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
