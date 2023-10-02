const userKnex = require("../../db/index");
const USERS_TABLE: string = "users";

module.exports = {
  USERS_TABLE,
  async getUser(fb_uid: string) { 
    try {
      const user = await userKnex(USERS_TABLE).where({ fb_uid }).first();
      console.log(user);
      return user;
    } catch (error) { 
      throw error;
    }
  },
  async insertUser(user: { name: string, email: string, password: string, fb_uid: string }) {
    try {
      const [userId] = await userKnex(USERS_TABLE).insert(user).returning("user_id");
      return userId;
    } catch (error) {
      throw error;
    }
  }
}