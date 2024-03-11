import mysql from "mysql2";

export default mysql.createPool({
    user: "root",
    password: "root",
    database: "e_commerce",
    host: "localhost",
    connectionLimit: 100
});