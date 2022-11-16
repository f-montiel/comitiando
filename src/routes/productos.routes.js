import { Router } from 'express';
import { check } from 'express-validator';
import {
  borrarProducto,
  buscarProducto,
  editarProducto,
  guardarProducto,
  listarProductos,
} from '../controllers/productos.controller';

const router = Router()

router
  .route('/productos')
  .get(listarProductos)
  .post(
    [
      check('nombre')
        .notEmpty()
        .withMessage('El nombre es un dato obligatorio')
        .isString()
        .withMessage('El dato ingresado debe ser de tipo string')
        .isLength({
          min: 2,
          max: 150,
        })
        .withMessage(
          'El nombre del usuario puede tener entre 2 y 150 caracteres',
        ),
      check('estado')
        .notEmpty()
        .withMessage('El estado es un dato obligatorio')
        .isBoolean()
        .withMessage('El dato ingresado debe ser un booleano'),
      check('precio')
        .notEmpty()
        .withMessage('El precio es un valor obligatorio')
        .isNumeric()
        .withMessage('El valor ingresado debe ser numerico')
        .custom((value) => {
          if (value >= 1 && value <= 7000) {
            return true
          } else {
            throw new Error('El precio debe estar entre 1 y 7000')
          }
        }),
      check('detalle')
        .notEmpty()
        .withMessage('El detalle es un dato obligatorio')
        .isString()
        .withMessage('El detalle debe ser de tipo string')
        .isLength({
          min: 10,
          max: 200,
        })
        .withMessage('El detalle debe tener entre 10 y 200 caracteres'),
      check('categoria')
        .notEmpty()
        .withMessage('La categoria es un campo Obligatorio')
        .isIn(['Para Compartir', 'Tacos', 'Brochetas', 'Sushi', 'Tazones'])
        .withMessage('Debe ingresar una categoria valida'),
      check('imagen')
        .notEmpty('La URL del producto es obligatoria')
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage('Debe ingresar una URL valida'),
    ],
    guardarProducto,
  )

router
  .route('/productos/:id')
  .get(buscarProducto)
  .put(
    [
      check('nombre')
        .notEmpty()
        .withMessage('El nombre es un dato obligatorio')
        .isString()
        .withMessage('El dato ingresado debe ser de tipo string')
        .isLength({
          min: 2,
          max: 150,
        })
        .withMessage(
          'El nombre del usuario puede tener entre 2 y 150 caracteres',
        ),
      check('estado')
        .notEmpty()
        .withMessage('El estado es un dato obligatorio')
        .isBoolean()
        .withMessage('El dato ingresado debe ser un booleano'),
      check('precio')
        .notEmpty()
        .withMessage('El precio es un valor obligatorio')
        .isNumeric();
        .withMessage('El valor ingresado debe ser numerico')
        .custom((value) => {
          if (value >= 1 && value <= 7000) {
            return true
          } else {
            throw new Error('El precio debe estar entre 1 y 7000')
          }
        }),
      check('detalle')
        .notEmpty()
        .withMessage('El detalle es un dato obligatorio')
        .isString()
        .withMessage('El detalle debe ser de tipo string')
        .isLength({
          min: 10,
          max: 200,
        })
        .withMessage('El detalle debe tener entre 10 y 200 caracteres'),
      check('categoria')
        .notEmpty()
        .withMessage('La categoria es un campo Obligatorio')
        .isIn(['Para Compartir', 'Tacos', 'Brochetas', 'Sushi', 'Tazones'])
        .withMessage('Debe ingresar una categoria valida'),
      check('imagen')
        .notEmpty('La URL del producto es obligatoria')
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage('Debe ingresar una URL valida'),
    ],
    editarProducto,
  )
  .delete(borrarProducto)

export default router
