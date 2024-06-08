import { RequestHandler } from 'express';
import { Track } from '../models/track';
import { Song } from '../models/song';

export const GetTracksBySongId: RequestHandler = async (req, res, next) => {
    const { song_id } = req.params;
    const tracks: Track[] = await Track.findAll({ where: { song_id: song_id }, include: [Song] });
    return res.status(200).json({ message: 'Tracks fetched', data: tracks });
};
