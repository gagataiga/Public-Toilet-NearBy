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
      
      const response = await postsKnex(POSTS_TABLE).insert(data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  async getAllPosts() {
    try {
      const response = await postsKnex(POSTS_TABLE)
      .select(
        'posts.post_id', 
        'posts.comment', 
        'posts.user_id', 
        'posts.cost', 
        'posts.facilities', 
        'posts.image_url', 
        'locations.longitude', 
        'locations.latitude'
      )
      .leftJoin('locations', 'posts.location_id', 'locations.location_id')
      .leftJoin('reviews', 'posts.post_id', 'reviews.post_id')
      .groupBy(
        'posts.post_id', 
        'posts.comment', 
        'posts.user_id', 
        'posts.cost', 
        'posts.facilities', 
        'posts.image_url', 
        'locations.longitude', 
        'locations.latitude'
      )
      .select(postsKnex.raw('COALESCE((SUM(CAST(posts.rating AS INTEGER)) + COALESCE(SUM(CAST(reviews.rating AS INTEGER)), 0)) / (COUNT(posts.rating) + COUNT(reviews.rating)), 0) AS rating'));
      return response;
    } catch (error) {
      throw error;
    }
  },
  async getUserPostByUId(userId: number) {
    try {
      const response = await postsKnex(POSTS_TABLE).select(
        'post_id',
        'comment',
        'cost',
        'facilities',
        'image_url',
      ).where("user_id", userId);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}