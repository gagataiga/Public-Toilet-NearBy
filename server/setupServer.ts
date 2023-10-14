import { Request, Response, NextFunction } from 'express';
const express = require("express");
const usersRouter = require("./router/users-router");
const locationsRouter = require("./router/locations-router");
const postsRouter = require("./router/posts-router");
const cors = require("cors");
const path = require("path");

require("dotenv").config(); // .envファイルを読み込む

export const setUpServer = () => { 
  const app = express();
  // app.use(cors({
  //   origin: process.env.WEB_SERVER_URL, // reaxt app origin
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // http method
  //   credentials: true, // auth info
  //   optionsSuccessStatus: 204, // status
  // }));
  // static index.html file
  app.use(express.static(path.resolve(__dirname, '../../client/build')));
  app.use(express.json());
  // user 
  app.use("/users", usersRouter);
  app.use("/locations", locationsRouter);
  app.use("/posts", postsRouter);
  return app;
}
