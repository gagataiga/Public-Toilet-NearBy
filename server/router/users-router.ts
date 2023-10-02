import { Response , Request} from "express";
const { cacheUserInfo } = require("../middleware/middleware");
const express = require("express");
const {cache} = require("../middleware/middleware");
const router = express.Router();
const usersModel = require("../model/users-model");

router.get("/auth/:uid", cacheUserInfo, async (req: Request, res: Response) => {
  console.log(req.params.uid);
  cache.set(req.params.uid, req.params.uid, 100);
  res.status(200).send("This is /users/auth");
});
 
router.post("/auth", async (req:Request, res:Response) => {
  const user = req.body;
  console.log(user.name);
  console.log(user.email);
  console.log(user.password);
  console.log(user.uid);

  res.status(200).send("okey");
});
module.exports = router;