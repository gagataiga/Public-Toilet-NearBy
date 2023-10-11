import { Request, Response, request } from "express";

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

router.get("/navigation", async (req: Request, res: Response) => {
  try { 
    const { start, end } = req.query;
    const key = process.env.OPEN_ROUTE_API_KEY;
    console.log(key);
    console.log(start, end);
    const URL = `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=${key}&start=${start}&end=${end}`
    const result = await fetch(URL);
    const data = await result.json();
    res.status(200).send(data);
  }catch(error){
    console.log(error);
    res.status(400).send("bad request");
  }
});

module.exports = router;
