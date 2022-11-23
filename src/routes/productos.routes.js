import { Router } from "express";
import { check } from "express-validator";
import { borrarProducto, buscarProducto, editarProducto, guardarProducto, listarProductos } from "../controllers/productos.controller";

const router = Router();

router
    .route("/productos")
    .get(listarProductos)
    .post(
        [
            check("nombre")
                .notEmpty()
                .withMessage("El nombre es un dato obligatorio")
                .isString()
                .withMessage("El dato ingresado debe ser de tipo string")
                .isLength({
                    min: 2,
                    max: 30,
                })
                .withMessage("El nombre del usuario puede tener entre 2 y 150 caracteres"),
            check("estado")
                .notEmpty()
                .withMessage("El estado es un dato obligatorio")
                .isBoolean()
                .withMessage("El dato ingresado debe ser un booleano"),
            check("precio")
                .notEmpty()
                .withMessage("El precio es un valor obligatorio")
                .isNumeric()
                .withMessage("El valor ingresado debe ser numerico")
                .custom((value) => {
                    if (value >= 1 && value <= 10000) {
                        return true;
                    } else {
                        throw new Error("El precio debe estar entre 1 y 10000");
                    }
                }),
            check("detalle")
                .notEmpty()
                .withMessage("El detalle es un dato obligatorio")
                .isString()
                .withMessage("El detalle debe ser de tipo string")
                .isLength({
                    min: 20,
                    max: 500,
                })
                .withMessage("El detalle debe tener entre 20 y 500 caracteres"),
            check("categoria")
                .notEmpty()
                .withMessage("La categoria es un campo Obligatorio")
                .isIn([
                    "BENTOS",
                    "TAKOS TAKOS",
                    "BROSCHETAS Y KUSHIAGES",
                    "KAITEN SUSHI",
                    "MAKI SUSHI BAR",
                    "TAZONES DONBURI",
                    "RAMEN",
                    "TEPPANYAKI",
                    "ARROZ",
                    "NIGIRI BAR",
                    "SASHIMI",
                    "CERVEZA Y SAKE",
                    "REFRESCOS",
                ])
                .withMessage("Debe ingresar una categoria valida"),
            check("imagen")
                .notEmpty()
                .withMessage("La Url es un campo Obligatorio")
                .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
                .withMessage("Debe ingresar una URL valida"),
        ],
        guardarProducto
    );

router
    .route("/productos/:id")
    .get(buscarProducto)
    .put(
        [
            check("nombre")
                .notEmpty()
                .withMessage("El nombre es un dato obligatorio")
                .isString()
                .withMessage("El dato ingresado debe ser de tipo string")
                .isLength({
                    min: 2,
                    max: 30,
                })
                .withMessage("El nombre del usuario puede tener entre 2 y 150 caracteres"),
            check("estado")
                .notEmpty()
                .withMessage("El estado es un dato obligatorio")
                .isBoolean()
                .withMessage("El dato ingresado debe ser un booleano"),
            check("precio")
                .notEmpty()
                .withMessage("El precio es un valor obligatorio")
                .isNumeric()
                .withMessage("El valor ingresado debe ser numerico")
                .custom((value) => {
                    if (value >= 1 && value <= 10000) {
                        return true;
                    } else {
                        throw new Error("El precio debe estar entre 1 y 10000");
                    }
                }),
            check("detalle")
                .notEmpty()
                .withMessage("El detalle es un dato obligatorio")
                .isString()
                .withMessage("El detalle debe ser de tipo string")
                .isLength({
                    min: 20,
                    max: 500,
                })
                .withMessage("El detalle debe tener entre 20 y 500 caracteres"),
            check("categoria")
                .notEmpty()
                .withMessage("La categoria es un campo Obligatorio")
                .isIn([
                    "BENTOS",
                    "TAKOS TAKOS",
                    "BROSCHETAS Y KUSHIAGES",
                    "KAITEN SUSHI",
                    "MAKI SUSHI BAR",
                    "TAZONES DONBURI",
                    "RAMEN",
                    "TEPPANYAKI",
                    "ARROZ",
                    "NIGIRI BAR",
                    "SASHIMI",
                    "CERVEZA Y SAKE",
                    "REFRESCOS",
                ])
                .withMessage("Debe ingresar una categoria valida"),
            check("imagen")
                .notEmpty()
                .withMessage("La Url es un campo Obligatorio")
                .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
                .withMessage("Debe ingresar una URL valida"),
        ],
        editarProducto
    )
    .delete(borrarProducto);

export default router;
