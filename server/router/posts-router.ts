import { Request, Response } from "express";

const express = require("express");
const router = express.Router();
const postsModel = require("../model/posts-model");

router.post("/", async (req: Request, res: Response) => {
  console.log("post uploader");
  
  try {
    const data = req.body;
    console.log("data",data);
    const response = await postsModel.insertPost(data);
    console.log(response);
    res.status(200).send("Insert is success");
  } catch (error) {
    res.status(400).send("bad request");
  }
});

module.exports = router;