const reviewsKnex = require("../../db/index");
const REVIEWS_TABLE: string = "reviews";

module.exports = {
  REVIEWS_TABLE,
  async insertReview(review: { comment: string, user_id: number, rating: number, post_id: number }) {
    try {
      const response = await reviewsKnex(REVIEWS_TABLE).insert(
        {
          ...review,
          created_at: new Date(Date.now()).toISOString(),
          updated_at: new Date(Date.now()).toISOString(),
        }
      );
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }

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