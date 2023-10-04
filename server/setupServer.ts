const express = require("express");
const usersRouter = require("./router/users-router");
const cors = require("cors");

export const setUpServer = () => { 
  const app = express();
  app.use(cors({
    origin: 'http://localhost:3000', // reaxt app origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // http method
    credentials: true, // auth info
    optionsSuccessStatus: 204, // status
  }));
  app.use(express.json());
  // user 
  app.use("/users", usersRouter);

  return app;
}
