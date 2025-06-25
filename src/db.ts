import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('endpoint_dev', 'root', '7183998a', {
  host: 'localhost',
  dialect: 'mysql',
});