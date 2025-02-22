import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "srv1491.hstgr.io",   // Change this if your DB is hosted elsewhere
    user: "u483037587_pettouser",        // Your MySQL username
    password: "z3[@wBoTI", // Your MySQL password
    database: "u483037587_pettodb", // Your database name
});

export default db;
