const Pool = require("pg").Pool

const connection = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mydb",
    password: "shubham",
    port: 5432
})

module.exports = connection;