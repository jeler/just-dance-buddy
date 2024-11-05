import { RequestHandler } from 'express';
import { Person } from '../models/person';

export const GetChoreographers: RequestHandler = async (req, res, next) => {
    const people: Person[] = await Person.findAll();
    console.log(people, 'dis peope');
    return res.status(200).json({ message: 'Choreographers successfully fetched', data: people });
    // would have an error handling component
};
