import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return await knex.schema.alterTable("posts", (table) => {
    table.integer("rating").notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.table("posts", (table) => {
    table.dropColumn("rating");
  });
}

