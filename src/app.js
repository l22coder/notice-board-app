import express from "express";
import { globalRouter, userRouter, boardRouter } from "./routers/index";

const app = express();

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/board", boardRouter);

export { app };
