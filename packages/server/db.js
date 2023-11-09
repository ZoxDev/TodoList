// Initialize Postgres connection, and export it for use in other files

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "oui",
  host: "localhost",
  port: 5432,
  database: "todoapp"
});

module.exports = pool;