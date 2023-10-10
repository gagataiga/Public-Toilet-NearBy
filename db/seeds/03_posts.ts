import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("posts").del();

    // Inserts seed entries
    await knex("posts").insert([
        {
        post_id: 1,
        comment: 'This is nice',
        created_at: new Date(Date.now()).toISOString(),
        updated_at: new Date(Date.now()).toISOString(),
        user_id: 1,
        cost: 'Free',
        facilities: [0, 2, 1, 3],
        location_id: 1,
        image_url: 'https://firebasestorage.googleapis.com/v0/b/near-me-toilet.appspot.com/o/posts%2Fbathroom-5944194_640.jpg?alt=media&token=14dedddb-7742-4bd3-8278-cc68a84f8dc5',
        rating: 5
        },
        {
            post_id: 2,
            comment: 'This is nice',
            created_at: new Date(Date.now()).toISOString(),
            updated_at: new Date(Date.now()).toISOString(),
            user_id: 2,
            cost: 'Free',
            facilities: [0, 1],
            location_id: 2,
            image_url: 'https://firebasestorage.googleapis.com/v0/b/near-me-toilet.appspot.com/o/posts%2Fbathroom-5944194_640.jpg?alt=media&token=14dedddb-7742-4bd3-8278-cc68a84f8dc5',
            rating: 5
        },
        {
            post_id: 3,
            comment: 'This is nice',
            created_at: new Date(Date.now()).toISOString(),
            updated_at: new Date(Date.now()).toISOString(),
            user_id: 3,
            cost: 'Free',
            facilities: [0, 2, 1, 3],
            location_id: 3,
            image_url: 'https://firebasestorage.googleapis.com/v0/b/near-me-toilet.appspot.com/o/posts%2Fbathroom-5944194_640.jpg?alt=media&token=14dedddb-7742-4bd3-8278-cc68a84f8dc5',
            rating: 4
        },
        {
            post_id: 4,
            comment: 'This is nice',
            created_at: new Date(Date.now()).toISOString(),
            updated_at: new Date(Date.now()).toISOString(),
            user_id: 4,
            cost: 'Free',
            facilities: [0, 1, 3],
            location_id: 4,
            image_url: 'https://firebasestorage.googleapis.com/v0/b/near-me-toilet.appspot.com/o/posts%2Fbathroom-5944194_640.jpg?alt=media&token=14dedddb-7742-4bd3-8278-cc68a84f8dc5',
            rating: 5
            },
    ]);
};
