import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("users", (table) => { 

  })
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("users");
}

