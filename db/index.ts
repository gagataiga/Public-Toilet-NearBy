const knex = require("knex");
const knexConf = require("../knexfile");
const env = process.env.NODE_ENV;

module.exports = knex(knexConf[env || "development"]);