import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.table("posts", (table) => {
    table.renameColumn("posts_id", "post_id");
  }).table("locations", (table) => { 
    table.renameColumn("locations_id", "location_id");
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.table("posts", (table) => {
    table.renameColumn("post_id", "posts_id");
  }).table("locations", (table) => { 
    table.renameColumn("location_id", "locations_id");
  });
}

