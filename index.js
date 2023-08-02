import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import boardRouter from "./routers/boardRouter";

const app = express();
const PORT = 3000;

const handleListener = () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
};

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/board", boardRouter);

app.listen(PORT, handleListener);
