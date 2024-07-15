import { ITrack } from "../interfaces/Track";
import { Track } from "./Track";

export const TrackList = ({ tracks }: { tracks: ITrack[] }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {tracks.map((t) => (
        <Track track={t} />
      ))}
    </ul>
  );
};
