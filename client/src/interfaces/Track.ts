import { ISong } from "./Song";

export interface ITrack {
  track_id: number;
  mode: string;
  difficulty: string;
  effort: string;
  onJDU: boolean;
  onJDPlus: boolean;
  picto_count: number;
  gold_moves: number;
  original_game_id: string;
  song_id: number;
  alternate?: string;
  song?: ISong;
}
