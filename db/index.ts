const knex = require("knex");
const knexConf = require("../knexfile");
const env = process.env.NODE_ENV;
console.log("env file", env);

module.exports = knex(knexConf[env || "development"]);