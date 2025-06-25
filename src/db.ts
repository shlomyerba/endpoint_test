import { Sequelize } from 'sequelize';

console.log("DB_NAME:", process.env.DB_NAME, "DB_USER=", process.env.DB_USER, "DB_PASSWORD=", process.env.DB_PASSWORD);

export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    logging: false,
  }
);