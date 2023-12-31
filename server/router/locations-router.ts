import { Request, Response, request } from "express";

const express = require("express");
const router = express.Router();
const locationModel = require("../model/locations-model");
const axios = require('axios');
const path = require("path"); 
  
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
    const URL = `https://api.openrouteservice.org/v2/directions/foot-walking`
    const response = await axios.get(URL, {
      params: {
        api_key: key,
        start: start,
        end: end
      }
    });
    res.status(200).send(response.data);
  }catch(error){
    console.error(error);
    res.status(400).send("bad");
  }
});

module.exports = router;
