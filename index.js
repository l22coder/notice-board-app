import { app } from "./src/app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`서버가 정상적으로 실행되었습니다. http://localhost:${PORT} `);
});
