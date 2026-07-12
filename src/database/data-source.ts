import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const datasourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/entities/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
};

const datasource = new DataSource(datasourceOptions);

export default datasource;
