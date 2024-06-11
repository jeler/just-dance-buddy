import { RequestHandler } from 'express';
import { Song } from '../models/song';

export const GetSongs: RequestHandler = async (req, res, next) => {
    const songs: Song[] = await Song.findAll();
    return res.status(200).json({ message: 'Songs fetched', data: songs });
};

// export const GetSongsFromSearch: RequestHandler = async (req, res, next) => {
//     const {searchText} = req.query;
//     const songs: Song[] = await Song.findAll({where: {song_name: }})
// }
