import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.alterTable("posts", (table) => {
    table.integer("location_id").unsigned().notNullable();
    table.foreign("location_id").references("location_id").inTable("locations").onDelete("CASCADE");
    table.renameColumn("number_array", "facilities");
    table.text("image_url").notNullable();
  }).table("reviews", (table) => {
    table.integer("post_id").unsigned().notNullable();
    table.foreign("post_id").references("post_id").inTable("posts").onDelete("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.table("reviews", (table) => {
    table.dropColumn("post_id");
  }).table("posts", (table) => {
    table.dropColumn("location_id");
    table.renameColumn("facilities", "number_array");
    table.dropColumn("image_url");
  });
}

