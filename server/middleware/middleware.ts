import { Request, Response, NextFunction } from "express";
const NodeCache = require("node-cache");

export const cache = new NodeCache();

export const cacheUserInfo = (req: Request, res: Response, next: NextFunction) => {
  // firebase auth uid
  console.log("cache user info");
  const fbId = req.params.firebaseId; 
  if (fbId) { 
    // get user info as cache data
    const cachedUser = cache.get(fbId);
    if (cachedUser) {
      // response
      console.log("return a data from cache");
      return res.status(200).json(cachedUser);
    }
  }
  next();
};
