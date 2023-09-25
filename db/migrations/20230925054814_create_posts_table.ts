import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("posts", (table) => { 
    table.increments("posts_id").primary();
    table.integer("location_id").unsigned();
    table.foreign("location_id").references("locations_id").inTable("locations").onDelete("CASCADE");
    table.text("comment").notNullable();
    table.timestamp("created_at");
    table.timestamp("updated_at");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("user_id").inTable("users").onDelete("CASCADE");
    table.integer("cost");
    table.specificType("number_array", "integer[]");     
  })
}


export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("posts");
}

