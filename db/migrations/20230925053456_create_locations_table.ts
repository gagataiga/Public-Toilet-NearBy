import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("locations", (table) => {
    table.increments("locations_id").primary();
    table.double("longitude", 10, 6);
    table.double("latitude", 10, 6);
  });
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("locations");
}

