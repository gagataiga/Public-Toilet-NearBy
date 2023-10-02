import { Response , Request} from "express";

const express = require("express");
const router = express.Router();
const usersModel = require("../model/users-model");

// this is test
router.get("/auth", async (request:Request, response:Response) => {
  console.log("getAuth");
  response.status(200).send("This is /users/auth");
});

router.post("/auth", async (request:Request, response:Response) => {
  const user = request.body;
  console.log(user);
});
module.exports = router;