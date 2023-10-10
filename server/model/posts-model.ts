const postsKnex = require("../../db/index");
const POSTS_TABLE: string = "posts";

module.exports = {
  POSTS_TABLE,
  async insertPost(post:
    { comment: string, user_id: number, cost: string, facilities: number[], location_id: number, image_url: string , rating:number}) {
    try {
      const data = {
        comment: post.comment,
        created_at: new Date(Date.now()).toISOString(),
        updated_at: new Date(Date.now()).toISOString(),
        user_id: post.user_id,
        cost: post.cost,
        facilities: post.facilities,
        location_id: post.location_id,
        image_url: post.image_url,
        rating: post.rating
      }
      console.log("yay",data);
      
      const response = await postsKnex(POSTS_TABLE).insert(data);
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async getAllPosts() {
    try {
      const response = await postsKnex(POSTS_TABLE)
        .select("post_id", "comment", "user_id", "cost",
          "facilities", "image_url", "rating",
          "locations.longitude", "locations.latitude")
        .join("locations", { "posts.location_id": "locations.location_id" });
      return response;
    } catch (error) {
      throw error;
    }
  }
}