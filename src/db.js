import fs from "fs"
import mysql from "mysql"


const data = fs.readFileSync("src/database.json");
const conf = JSON.parse(data);

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database,
    dateStrings: ['DATE','DATETIME']
});


connection.connect();

export default connection;