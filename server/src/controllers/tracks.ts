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
// @issue if put role_id in attributes, new object created =>
// could not find a solution other than leaving attributes of through table completely blank
export const GetTrack: RequestHandler = async (req, res, next) => {
    const { track_id } = req.params;
    const track: Track | null = await Track.findOne({
        attributes: ['track_id', 'mode', 'difficulty', 'effort', 'alternate'],
        include: [
            {
                model: Song,
                as: 'song',
                attributes: ['song_id', 'song_name', 'artist']
            },
            {
                model: Person,
                as: 'people',
                attributes: ['person_id', 'name'],
                through: { attributes: ['role_id'] }
            }
        ],

        where: { track_id }
    });

    return res.status(200).json({ message: 'Track fetched', data: track });
};

// export const GetPeopleByTrackId: RequestHandler = async (req, res, next) => {
//     const { track_id } = req.params;
//     const people = await Participant.findAll({ where: { track_id }, include: [Track] });
//     return res.status(200).json({ message: `People for track: ${track_id} fetched`, data: people });
// };
