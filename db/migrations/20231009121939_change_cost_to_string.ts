import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('posts', function(table) {
    table.string('cost').alter(); 
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('posts', function(table) {
    table.integer('cost').alter(); 
  });
}

