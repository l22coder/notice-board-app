import { Router } from "express";
import { user, editUser, deleteUser } from "../controllers/userController";

const userRouter = Router();

userRouter.get("/:id", user);
userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);

export { userRouter };
