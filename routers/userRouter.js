/*
Method | Path          | Feature
------------------------------------
GET	   | /users/:id	   | 사용자 조회
PUT	   | /users/edit   | 사용자 수정
DELETE | /users/delete | 사용자 삭제
*/

import express from "express";
import { user, editUser, deleteUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", user);
userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);

export default userRouter;
