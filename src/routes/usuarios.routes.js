import { Router } from "express";
import { borrarUsuario, buscarUsuario, editarUsuario, guardarUsuario, listarUsuarios } from "../controllers/usuarios.controller";

const router = Router();

router.route("/usuarios")
.get(listarUsuarios)
.post(guardarUsuario);

router.route("/usuarios/:id")
.get(buscarUsuario)
.put(editarUsuario)
.delete(borrarUsuario);

export default router;