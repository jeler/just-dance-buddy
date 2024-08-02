import { ITrack } from "../interfaces/Track";

export const Track = ({ track }: { track: ITrack }) => {
  return (
    <tr key={track.track_id}>
      <td>{track.song?.song_name}</td>
      <td>{track.song?.artist}</td>
    </tr>
  );
};
