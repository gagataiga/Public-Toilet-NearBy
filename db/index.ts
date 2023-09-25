const knex = require("knex");
const knexConf = require("../knexfile");
const env:string = process.env.NODE_ENV || "development";

module.exports = knex(knexConf[env]);