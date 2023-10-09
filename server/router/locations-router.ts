import { Request, Response } from "express";

const express = require("express");
const router = express.Router();
const locationModel = require("../model/locations-model");

router.post("/",async (req:Request, res:Response) => {
  try {
    const location = req.body;
    const locagionId = await locationModel.insertLocation(location);
    res.status(200).send(locagionId);
  } catch (error) {
    console.error(error);
    res.status(400).send("bad request");
  }
})

module.exports = router;