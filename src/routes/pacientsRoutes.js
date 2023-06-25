import { Router } from "express";
import pacientsControllers from "../controllers/pacientsControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { pacientSchemma } from "../schemas/Pacient.js";

const pacientsRoutes = Router();

pacientsRoutes
    .all('/*', authMiddleware.authValidation)
    .post('/', validateSchema(pacientSchemma), pacientsControllers.registerPacient)
    .get('/', pacientsControllers.listPacients)
    .post('/delete/:id', pacientsControllers.deletePacient);

export default pacientsRoutes;