import { Router } from "express";
import { CreateUserController } from "./src/controllers/CreateUserControllers";
import { CreateTagControllers } from "./src/controllers/CreateTagControllers";

import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import {AuthenticateUserController} from "./src/controllers/AuthenticateUserController";
import { CreateComplimentController } from "./src/controllers/CreateComplimentController";
import {ensureAuthenticate} from "./src/middlewares/ensureAuthenticate";
import {ListUserSendComplimentsController} from "./src/controllers/ListUserSendComplimentsController";
import {ListUserReceiveComplimentsController} from "./src/controllers/ListUserReceiveComplimentsController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagControllers;
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

router.post("/tags",ensureAuthenticate , ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments",ensureAuthenticate , createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticate, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticate ,listUserReceiveComplimentsController.handle);


export { router }