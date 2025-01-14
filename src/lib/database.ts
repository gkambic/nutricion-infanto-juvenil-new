/* import { createPool } from "mysql2/promise";
import { database } from "./config.js";

const pool = createPool(database);

export default pool; */

import mysql, { Pool } from 'mysql2/promise';

const pool: Pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USERNAME || 'tu_usuario',
  password: process.env.MYSQL_PASSWORD || 'tu_contraseña',
  database: process.env.MYSQL_DBNAME || 'tu_base_de_datos',
  port: parseInt(process.env.MYSQL_PORT || '20606', 10),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
