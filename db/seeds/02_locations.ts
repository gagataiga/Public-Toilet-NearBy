import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("locations").del();

    // Inserts seed entries
    await knex("locations").insert([
        { longitude: 139.707873, latitude: 36.051154 },
        { longitude: 139.712448, latitude: 36.042585 },
        { longitude: 139.713624, latitude: 36.051265 },
        { longitude: 139.709826, latitude: 36.049851 },
    ]);
};
