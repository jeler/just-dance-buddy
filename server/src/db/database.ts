import { Sequelize } from 'sequelize-typescript';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from '../config/config';
import { Song } from '../models/song';
import { Track } from '../models/track';
import { Person } from '../models/person';
import { PersonTrack } from '../models/participant';

const connection = new Sequelize({
    dialect: 'postgres',
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    logging: false,
    models: [Song, Track, Person, PersonTrack]
});

export default connection;
