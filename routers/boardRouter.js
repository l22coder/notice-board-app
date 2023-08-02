/*
Method | Path              | Feature
----------------------------------------
GET    | /board/:id	       | 게시판 조회
POST   | /board/write	     | 게시판 작성
PUT	   | /board/:id/edit   | 게시판 수정
DELETE | /board/:id/delete | 게시판 삭제
*/
import express from "express";
import {
  board,
  writeBoard,
  editBoard,
  deleteBoard,
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/:id", board);
boardRouter.get("/write", writeBoard);
boardRouter.get("/:id/edit", editBoard);
boardRouter.get("/:id/delete", deleteBoard);

export default boardRouter;
