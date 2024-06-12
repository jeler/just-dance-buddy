import { RequestHandler } from 'express';
import { Song } from '../models/song';
import { Op } from 'sequelize';

export const GetSongs: RequestHandler = async (req, res, next) => {
    const songs: Song[] = await Song.findAll();
    return res.status(200).json({ message: 'Songs fetched', data: songs });
};

// year, artist, language
// duration will come in as greater than x min
// add duration logic later and limit
export const GetSongsFromSearch: RequestHandler = async (req, res, next) => {
    const populatedSearchTerms: { [key: string]: any } = Object.keys(req.query)
        .filter((col) => req.query[col] !== '')
        .reduce((accumulatedObject, currentKey) => ({ ...accumulatedObject, [currentKey]: req.query[currentKey] }), {});
    const searches = Object.keys(populatedSearchTerms).map((col: string) => {
        return { [col]: { [Op.iLike]: `%${populatedSearchTerms[col]}%` } };
    });
    const songs: Song[] = await Song.findAll({
        where: {
            [Op.and]: [...searches]
        }
    });
    return res.status(200).json({ message: 'Songs fetched', data: songs });
};
