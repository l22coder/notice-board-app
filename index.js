import express from "express";

const app = express();
const PORT = 3000;

const handleListener = () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
};

app.get("/", (req, res) => {
  res.send("Hello! Notice Board Project start!");
});

app.listen(PORT, handleListener);
