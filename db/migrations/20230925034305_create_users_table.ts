import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("users", (table) => { 
    table.increments("user_id").primary();
    table.string("username", 255).notNullable();
    table.string("email", 255).notNullable().unique();
    table.string("password", 255).notNullable();
  })
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("users");
}

