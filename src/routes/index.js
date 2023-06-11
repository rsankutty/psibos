import { Router } from "express";
import pacientsRoutes from "./pacientsRoutes.js";
import usersRoutes from "./usersRoutes.js";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/pacients", pacientsRoutes);

export default routes;
