import express from "express";
import {
    registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
} from "../controllers/veterinarioController.js";
import cheackAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// Área publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
// router.get("/olvide-password/:token", comprobarToken);
// router.post("/olvide-password/:token", nuevoPassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// Área privada
router.get("/perfil", cheackAuth, perfil);

export default router;
