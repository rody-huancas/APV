import express from "express";
import {
    agregarPaciente,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
} from "../controllers/pacienteController.js";
import cheackAuth from "../middleware/authMiddleware.js";

const router = express.Router();

router
    .route("/")
    .post(cheackAuth, agregarPaciente)
    .get(cheackAuth, obtenerPacientes);
router
    .route("/:id")
    .get(cheackAuth, obtenerPaciente)
    .put(cheackAuth, actualizarPaciente)
    .delete(cheackAuth, eliminarPaciente);

export default router;
