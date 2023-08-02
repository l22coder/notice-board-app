import { Router } from "express";
import {
  board,
  writeBoard,
  editBoard,
  deleteBoard,
} from "../controllers/boardController";

const boardRouter = Router();

boardRouter.get("/:id", board);
boardRouter.get("/write", writeBoard);
boardRouter.get("/:id/edit", editBoard);
boardRouter.get("/:id/delete", deleteBoard);

export { boardRouter };
