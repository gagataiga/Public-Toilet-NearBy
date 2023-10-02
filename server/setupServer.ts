const express = require("express");
const usersRouter = require("./router/users-router");

export const setUpServer = () => { 
  const app = express();
  app.use(express.json());
  // user 
  app.use("/users", usersRouter);

  return app;
}
