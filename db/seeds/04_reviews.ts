import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("reviews").del();

    // Inserts seed entries
    await knex("reviews").insert([
        {
        comment: "this toilet is clean but there is no toilet paper sometimes",
        created_at: new Date(Date.now()).toISOString(),
        updated_at: new Date(Date.now()).toISOString(),
        user_id: 1,
        rating: 4,
        post_id: 2
        },
        {
        comment: "Clean and well-maintained restroom, highly recommended!",
        created_at: new Date(Date.now()).toISOString(),
        updated_at: new Date(Date.now()).toISOString(),
        user_id: 1,
        rating: 4,
        post_id: 3
        },
        {
        comment: "Nice restroom!",
        created_at: new Date(Date.now()).toISOString(),
        updated_at: new Date(Date.now()).toISOString(),
        user_id: 2,
        rating: 3,
        post_id: 3
        },
        {
            comment: "Basic facilities, nothing extraordinary",
            created_at: new Date(Date.now()).toISOString(),
            updated_at: new Date(Date.now()).toISOString(),
            user_id: 2,
            rating: 3,
            post_id: 4
            },
        {
            comment: "It is not cleaned",
            created_at: new Date(Date.now()).toISOString(),
            updated_at: new Date(Date.now()).toISOString(),
            user_id: 3,
            rating: 2,
            post_id: 4
        },
        {
            comment: "Simple and clean restroom, satisfied",
            created_at: new Date(Date.now()).toISOString(),
            updated_at: new Date(Date.now()).toISOString(),
            user_id: 3,
            rating: 5,
            post_id: 1
        },
        {
            comment: "Okay toilet, not too bad.",
            created_at: new Date(Date.now()).toISOString(),
            updated_at: new Date(Date.now()).toISOString(),
            user_id: 4,
            rating: 3,
            post_id: 1
        },
        {
            comment: "Good bathroom, thumbs up!",
            created_at: new Date(Date.now()).toISOString(),
            updated_at: new Date(Date.now()).toISOString(),
            user_id: 4,
            rating: 5,
            post_id: 2
        },
    ]);
};

// review_id  | integer                  |           | not null | nextval('reviews_review_id_seq'::regclass)
//  comment    | text                     |           | not null | 
//  created_at | timestamp with time zone |           |          | 
//  updated_at | timestamp with time zone |           |          | 
//  user_id    | integer                  |           |          | 
//  rating     | integer                  |           |          | 
//  post_id    | integer                  |           | not null | 