import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return await knex.schema.table("reviews", (table) => {
    table.dropColumn("post_id");
  }).table("posts", (table) => {
    table.dropColumn("location_id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.table("posts", (table) => {
    table.integer("location_id").unsigned();
    table.foreign("location_id").references("locations_id").inTable("locations").onDelete("CASCADE");
  }).table("reviews", (table) => { 
    table.integer("post_id").unsigned();
    table.foreign("post_id").references("posts_id").inTable("posts").onDelete("CASCADE");
  });
}
