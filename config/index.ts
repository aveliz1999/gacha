import databaseConfig from './database.json';
import {Dialect} from "sequelize";

type DatabaseConfig = {
    "dialect": Dialect,
    "storage": string
}
export const database: DatabaseConfig = databaseConfig as DatabaseConfig;