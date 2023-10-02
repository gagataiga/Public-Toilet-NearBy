import { Request, Response, NextFunction } from "express";
const NodeCache = require("node-cache");

export const cache = new NodeCache();

export const simpleCache =  (req: Request, res: Response, next: NextFunction) => { 

}

export const cacheUserInfo = (req: Request, res: Response, next: NextFunction) => {
  // firebase auth uid
  const userId = req.params.uid; 
  if (userId) { 
    // get user info as cache data
    const cachedUser = cache.get(userId);
    console.log(cachedUser);
    if (cachedUser) {
      // response
      return res.status(200).json(cachedUser);
    }
  }
  next();
};
