import { Router } from "express";
import { home, search } from "../controllers/boardController";
import { join, login } from "../controllers/userController";

const globalRouter = Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export { globalRouter };
