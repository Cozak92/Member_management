import fs from "fs"
import mysql from "mysql"

const __dirname = "E:/Portfolio/Member_Management_System/src"
const data = fs.readFileSync(__dirname +"/database.json");
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