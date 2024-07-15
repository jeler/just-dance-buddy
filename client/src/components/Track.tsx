import { ITrack } from "../interfaces/Track";

export const Track = ({ track }: { track: ITrack }) => {
  return (
    <li key={track.track_id} className="py-4 flex">
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
          {track.song?.song_name}
        </p>
        <p className="text-sm text-gray-500">{track.song?.artist}</p>
      </div>
    </li>
  );
};
