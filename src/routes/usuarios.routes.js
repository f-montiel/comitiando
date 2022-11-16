import { Router } from 'express';
import { check } from 'express-validator';
import {
  borrarUsuario,
  buscarUsuario,
  editarUsuario,
  guardarUsuario,
  listarUsuarios,
} from '../controllers/usuarios.controller';

const router = Router()

router
  .route('/usuarios')
  .get(listarUsuarios)
  .post(
    [
      check('nombre')
        .notEmpty()
        .withMessage('El nombre es un dato obligatorio')
        .isString()
        .withMessage('El dato ingresado debe ser de tipo string')
        .isLength({
          min: 2,
          max: 40,
        })
        .withMessage(
          'El nombre del usuario puede tener entre 2 y 40 caracteres',
        ),
      check('email')
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
        .withMessage(
          'La contraseña debe tener como minimo 6 caracteres y maximo 20',
        ),
      check('perfil')
        .notEmpty('')
        .withMessage('El perfil es un dato obligatorio'),
      check('estado')
        .notEmpty()
        .withMessage('El estado es un dato obligatorio')
        .isBoolean()
        .withMessage('El estado debe ser un valor booleano'),
    ],
    guardarUsuario,
  )

router
  .route('/usuarios/:id')
  .get(buscarUsuario)
  .put(
    [
      check('nombre')
        .notEmpty()
        .withMessage('El nombre es un dato obligatorio')
        .isString()
        .withMessage('El dato ingresado debe ser de tipo string')
        .isLength({
          min: 2,
          max: 40,
        })
        .withMessage(
          'El nombre del usuario puede tener entre 2 y 40 caracteres',
        ),
      check('email')
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
        .withMessage(
          'La contraseña debe tener como minimo 6 caracteres y maximo 20',
        ),
      check('perfil')
        .notEmpty('')
        .withMessage('El perfil es un dato obligatorio'),
      check('estado')
        .notEmpty()
        .withMessage('El estado es un dato obligatorio')
        .isBoolean()
        .withMessage('El estado debe ser un valor booleano'),
    ],
    editarUsuario,
  )
  .delete(borrarUsuario)

export default router
