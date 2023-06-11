import { Router } from "express";
import usersControllers from "../controllers/usersControllers.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";
import { userSchemma } from "../schemas/User.js";

const userRoutes = Router();

userRoutes.post('/signup', validateSchema(userSchemma) , usersControllers.signup)
userRoutes.post("/signin", usersControllers.signin)

export default userRoutes;
