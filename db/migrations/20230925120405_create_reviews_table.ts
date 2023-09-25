import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("reviews", (table) => {
    table.increments("review_id").primary();
    table.text("comment").notNullable();
    table.timestamp("created_at");
    table.timestamp("updated_at");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("user_id").inTable("users").onDelete("CASCADE");
    table.integer("post_id").unsigned();
    table.foreign("post_id").references("posts_id").inTable("posts").onDelete("CASCADE");
    table.integer("rating");
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("reviews");
}

