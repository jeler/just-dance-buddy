import { Sequelize } from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../config/config';

export default new Sequelize({
    dialect: 'postgres',
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASSWORD
});
