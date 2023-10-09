const postsKnex = require("../../db/index");
const POSTS_TABLE: string = "posts";

module.exports = {
  POSTS_TABLE,
  async insertPost(post:
    { comment: string, user_id: number, cost: number, facilities: number[], location_id: number, image_url: string }) {
    try {
      const data = {
        comment: post.comment,
        created_at: new Date(),
        updated_at: new Date(),
        user_id: post.user_id,
        cost: post.cost,
        facilities: post.facilities,
        location_id: post.location_id,
        image_url: post.image_url
      }

      const response = await userKnex.insert(data);
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
}