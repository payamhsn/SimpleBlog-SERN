import mysql from "mysql";
import "dotenv/config";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_KEY,
  database: "blog",
});

// console.log(db);

// console.log(process.env);
