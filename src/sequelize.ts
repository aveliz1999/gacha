import {Sequelize} from 'sequelize-typescript';
import {database as databaseConfig} from '../config/index';
import Character from "./models/Character";

const sequelize =  new Sequelize({
    ...databaseConfig,
    logging: false
});


export default () => {
    sequelize.addModels([Character]);
    return sequelize;
};