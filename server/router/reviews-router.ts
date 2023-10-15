import { Request, Response } from "express";

const express = require("express");
const router = express.Router();
const reviewsModel = require("../model/reviews-model");

router.get("/:postId", async (req: Request, res: Response) => { 
  try {
    const postId = req.params.postId;
    console.log("log",postId);
    
    const result = await reviewsModel.getReviews(Number(postId));
    console.log(result);
    
    console.log(result);
    
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(400).send("bad request");
  }
})

module.exports = router;