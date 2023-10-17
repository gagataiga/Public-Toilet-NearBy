import { Request, Response } from "express";

const express = require("express");
const router = express.Router();
const postsModel = require("../model/posts-model");

router.post("/", async (req: Request, res: Response) => {  
  try {
    const data = req.body;
    const response = await postsModel.insertPost(data);
    res.status(200).send("Insert is success");
  } catch (error) {
    res.status(400).send("bad request");
    console.error(error);
  }
});

router.get("/:userId", async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const response = await postsModel.getUserPostByUId(userId);
    console.log(response);
    
    res.status(200).send(userId);
  } catch (error) {
    res.status(400).send("bad request");
    console.error(error);
  }
});

router.get("/", async (req: Request, res: Response) => { 
  console.log("呼ばれたよ");
  
  try {
    const response = await postsModel.getAllPosts();
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send("bad request");
    console.error(error);
  }
});

module.exports = router;