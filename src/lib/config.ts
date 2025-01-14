import dotenv from 'dotenv';
dotenv.config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export const database = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DBNAME,
  port: process.env.MYSQL_PORT
};

export const SECRET = process.env.SECRET || 'some secret key';

export default {
  PORT: process.env.PORT || 3000,
  APPID: process.env.APPID || "",
};
