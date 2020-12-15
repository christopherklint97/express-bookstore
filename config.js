/** Common config for bookstore. */

let DB_CONFIG;

if (process.env.NODE_ENV === "test") {
  DB_CONFIG = {
    user: "christopher",
    password: "Guitar1234!",
    port: 5432,
    database: "books-test",
    host: "/var/run/postgresql",
  };
} else if (process.env.DATABASE_URL) {
  DB_CONFIG = process.env.DATABASE_URL;
} else {
  DB_CONFIG = {
    user: "christopher",
    password: "Guitar1234!",
    port: 5432,
    database: "books",
    host: "/var/run/postgresql",
  };
}

module.exports = { DB_CONFIG };
