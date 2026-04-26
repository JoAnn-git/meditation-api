const { Pool } = require("pg");

const isProduction = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? false : true,
});

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: false,
// });

console.log(`the isproducation ${isProduction}`);

module.exports = pool;
