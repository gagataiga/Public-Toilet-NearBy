import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();
    // Inserts seed entries
    await knex("users").insert([
        { username: 'hoge', email: 'hoge@gmail', password: 'hogehoge', fb_uid: 'a9q4omt72KU9OmHbntxyApuZZw53' },
        { username: 'foo', email: 'foo@gmail', password: 'hogehoge', fb_uid: 'oathewik8YXekOdXwurF6CWHwIF3' },
        { username: 'hogehoge', email: 'hogehoge@gmail', password: 'hogehoge', fb_uid: 'DXa8J3TIZ8UQ65koJZbrR3Kq7aR2' },
        { username: 'foofoo', email: 'foofoo@gmail', password: 'hogehoge', fb_uid: 'nOm7lGRD0AUj0heVronx2UrIt6f2' },
    ]);
};
