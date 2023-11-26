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
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send("bad request");
    console.error(error);
  }
});

router.get("/", async (req: Request, res: Response) => {   
  try {
    const response = await postsModel.getAllPosts();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send("bad request");
    console.error(error);
  }
});

router.delete("/:userId/:postId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const postId = req.params.postId;

  try {
    const response = await postsModel.deleteUserPost(userId, postId);
    res.status(200).send("user post was deleted successfully");
  } catch (error) {
    res.status(400).send("bad request");
    console.error(error);
  }

});

module.exports = router;