const mysql = require("mysql2")
const pool = mysql.createPool({
    host: 'remotemysql.com',
    port:3306,
    user: '9HtZOaokeY',
    database: '9HtZOaokeY',
    password:'PRpjiiPUR5'
})
module.exports = pool.promise();