import { createPool } from "mysql2/promise";
import { DB_HOST,
         DB_USER,
         DB_PASSWORD,
         DB_PORT,
         DB_NAME
 } from "./config.js"; //Muy importante poner .js siempre, ya que puede dar error en la localización del archivo
export const pool = createPool({
    user: 'root',
    password: 'mario100',
    host: 'localhost',
    port: 3306,
    database: 'database_links'
})

