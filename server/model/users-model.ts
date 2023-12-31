const userKnex = require("../../db/index");
const USERS_TABLE: string = "users";

module.exports = {
  USERS_TABLE,
  async getUser(fb_uid: string) { 
    try {
      const user = await userKnex(USERS_TABLE)
        .where("fb_uid", fb_uid)
        .first()
        .select("user_id", "username", "email");
      return user;
    } catch (error) { 
      throw error;
    }
  },
  async insertUser(user:{username: string, email: string, password: string, fb_uid: string }) {
    try {
      const [registeredUser] = await userKnex(USERS_TABLE).insert(user).returning("user_id");
      return registeredUser;
    } catch (error) {
      throw error;
    }
  }
}