import { Request, Response } from "express";

const express = require("express");
const router = express.Router();
const reviewsModel = require("../model/reviews-model");

router.get("/:postId", async (req: Request, res: Response) => { 
  try {
    const postId = req.params.postId;
    const result = await reviewsModel.getReviews(Number(postId));
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(400).send("bad request");
  }
})

router.post("/",async (req:Request, res:Response) => {
  try {
    const review = req.body;
    const result = await reviewsModel.insertReview(review);
    res.status(200).send("Review inserting is successful")
  } catch (error) {
    console.error(error);
    res.status(400).send("bad request");
  }
})

module.exports = router;