import { ITrack } from "../interfaces/Track";
import { Track } from "./Track";

export const TrackList = ({ tracks }: { tracks: ITrack[] }) => {
  return (
    <table className="table-auto shadow-lg bg-white">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((t) => (
          <Track track={t} />
        ))}
      </tbody>
    </table>
  );
};
