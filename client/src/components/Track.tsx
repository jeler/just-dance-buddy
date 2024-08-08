import { ITrack } from "../interfaces/Track";

export const Track = ({ track }: { track: ITrack }) => {
  return (
    <tr key={track.track_id}>
      <td>
        <span className="px-2">{track.song?.song_name}</span>
      </td>
      <td>
        <span className="px-2">{track.song?.artist}</span>
      </td>
    </tr>
  );
};
