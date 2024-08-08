import { ITrack } from "../interfaces/Track";
import { Track } from "./Track";

export const TrackList = ({ tracks }: { tracks: ITrack[] }) => {
  return (
    <table className="table-auto shadow-lg bg-white w-screen empty-cells-hidden border-spacing-1">
      <caption className="caption-top">Search Results</caption>
      <thead className="rounded-tl bg-gray-200">
        <tr>
          <th className="px-2 text-left font-medium text-gray-500 uppercase tracking-wider">
            Song
          </th>
          <th className="px-2 text-left font-medium text-gray-500 uppercase tracking-wider">
            Artist
          </th>
          <th className="px-2 text-left font-medium text-gray-500 uppercase tracking-wider">
            Track
          </th>
        </tr>
      </thead>
      <tbody className="px-2">
        {tracks.map((t) => (
          <Track track={t} />
        ))}
      </tbody>
    </table>
  );
};
