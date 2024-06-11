import { RequestHandler } from 'express';
import { Track } from '../models/track';
import { Song } from '../models/song';
import { Person } from '../models/person';
import { PersonTrack } from '../models/participant';

// export const GetTracksBySongId: RequestHandler = async (req, res, next) => {
//     const { song_id } = req.params;
//     const tracks: Track[] = await Track.findAll({ where: { song_id }, include: [Song] });
//     return res.status(200).json({ message: 'Tracks fetched', data: tracks });
// };

// these requests are not unique: both are read as /:songid
export const GetTrack: RequestHandler = async (req, res, next) => {
    const { track_id } = req.params;
    console.log(req.params, 'dis params');
    console.log(track_id);
    const track: Track | null = await Track.findOne({ where: { track_id }, include: [Song, Person] });
    // const t = await Track.sequelize?.query({});
    // const people: PersonTrack[] = await PersonTrack.findAll({ where: { track_id }, include: [Person] });
    // const combined = await Promise.allSettled([track, people]);

    // const people: PersonTrack[] | null = await PersonTrack.findAll({where: {track_id}, include: [Person]})

    return res.status(200).json({ message: 'Track fetched', data: track });
};

// export const GetPeopleByTrackId: RequestHandler = async (req, res, next) => {
//     const { track_id } = req.params;
//     const people = await Participant.findAll({ where: { track_id }, include: [Track] });
//     return res.status(200).json({ message: `People for track: ${track_id} fetched`, data: people });
// };
