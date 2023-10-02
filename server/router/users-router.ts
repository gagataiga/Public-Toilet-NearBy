import { Response , Request} from "express";
const { cacheUserInfo } = require("../middleware/middleware");
const express = require("express");
const {cache} = require("../middleware/middleware");
const router = express.Router();
const usersModel = require("../model/users-model");

// user Info cashe detail
// fb_uid:{uid:..., username:... , email:...};
router.get("/auth/:firebaseId", cacheUserInfo, async (req: Request, res: Response) => {
  res.status(200).send("This is /users/auth");
});

router.post("/auth", async (req:Request, res:Response) => {
  try {
    //example user:{fb_uid:.. , username:.. , password:.., email:...}
    const user = req.body;
    const registeredUser= await usersModel.insertUser(user);
    // set cache fb_uid(key):{user_id:..., username:... , email:...};
    cache.set(user.fb_uid, {uid:registeredUser.user_id, username: user.username, email: user.email }, 3600);
    // send back to user Id
    res.status(200).send(registeredUser);
  } catch (error) {
    res.status(400).send("bad request");
    console.error(error);
  }
});
module.exports = router;