import { Router } from "express";
import { login } from "../controllers/login.controllers";
import { check } from "express-validator";
const router = Router();

router.route('/login').post([check('email')
.notEmpty()
.withMessage('El email es un dato obligatorio')
.isEmail()
.withMessage('El email es un dato incorrecto'),
check('password')
.notEmpty()
.withMessage('La contraseña es un dato obligatorio')
.isLength({
  min: 6,
  max: 20,
})
.withMessage('La contraseña debe tener como minimo 6 caracteres y maximo 20')
],login);

export default router;