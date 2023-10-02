import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.alterTable("users", (table) => {
    table.string("fb_uid").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.table("users", (table) => {
    table.dropColumn("fb_uid");
  });
}

