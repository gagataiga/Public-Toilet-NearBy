const reviewsKnex = require("../../db/index");
const REVIEWS_TABLE: string = "reviews";

module.exports = {
  REVIEWS_TABLE,
  async insertReview() { 

  },
  async getReviews(postId: number) {
    try {
      const response = await reviewsKnex(REVIEWS_TABLE)
        .select("reviews.comment", "reviews.created_at", "reviews.rating", "users.username")
        .innerJoin('users', 'reviews.user_id', 'users.user_id')
        .where("reviews.post_id", postId);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}