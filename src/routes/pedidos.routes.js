import { check } from "express-validator";
const { Router } = require("express");
const { listarPedidos, guardarPedido, buscarPedido, editarPedido, borrarPedido } = require("../controllers/pedidos.controllers");

const router = Router();

router
    .route("/pedidos")
    .get(listarPedidos)
    .post(
        [
            check("usuario")
                .notEmpty()
                .withMessage("El usuario debe ser un dato obligatorio")
                .isString()
                .withMessage("El dato ingresado debe ser de tipo string")
                .isLength({
                    min: 2,
                    max: 40,
                })
                .withMessage("El usuario debe estar entre 2 y 40 caracteres"),
            check("fecha").notEmpty().withMessage("La fecha es un dato obligatorio").isString().withMessage("La fecha debe ser de tipo date"),
            check("productos")
                .notEmpty()
                .withMessage("Los productos son un dato obligatorio")
                .isArray({
                    min: 1,
                    max: 15,
                })
                .withMessage("El pedido debe contener entre 1 y 10 productos"),
            check("domicilio")
                .notEmpty()
                .withMessage("El domicilio es un dato obligatorio")
                .isString()
                .withMessage("El domicilio debe ser de tipo string")
                .isLength({
                    min: 5,
                    max: 100,
                })
                .withMessage("El domicilio debe estar entre 5 y 100 caracteres"),
            check("indicaciones")
                .notEmpty()
                .withMessage("Las indicaciones son un dato obligatorio")
                .isString()
                .withMessage("Las indicaciones debe ser de tipo string")
                .isLength({
                    min: 5,
                    max: 100,
                })
                .withMessage("Las indicaciones debe estar entre 5 y 100 caracteres"),
            check("estado")
                .notEmpty()
                .withMessage("El estado es un dato obligatorio")
                .isBoolean()
                .withMessage("El dato ingresado debe ser un booleano"),
        ],
        guardarPedido
    );
router
    .route("/pedidos/:id")
    .get(buscarPedido)
    .put(
        [
            check("usuario")
                .notEmpty()
                .withMessage("El usuario debe ser un dato obligatorio")
                .isString()
                .withMessage("El dato ingresado debe ser de tipo string")
                .isLength({
                    min: 2,
                    max: 40,
                })
                .withMessage("El usuario debe estar entre 2 y 40 caracteres"),
            check("fecha").notEmpty().withMessage("La fecha es un dato obligatorio").isDate().withMessage("La fecha debe ser de tipo date"),
            check("productos")
                .notEmpty()
                .withMessage("Los productos son un dato obligatorio")
                .isArray({
                    min: 1,
                    max: 15,
                })
                .withMessage("El pedido debe contener entre 1 y 10 productos"),
            check("domicilio")
                .notEmpty()
                .withMessage("El domicilio es un dato obligatorio")
                .isString()
                .withMessage("El domicilio debe ser de tipo string")
                .isLength({
                    min: 5,
                    max: 100,
                })
                .withMessage("El domicilio debe estar entre 5 y 100 caracteres"),
            check("indicaciones")
                .notEmpty()
                .withMessage("Las indicaciones son un dato obligatorio")
                .isString()
                .withMessage("Las indicaciones debe ser de tipo string")
                .isLength({
                    min: 5,
                    max: 100,
                })
                .withMessage("Las indicaciones debe estar entre 5 y 100 caracteres"),
            check("estado")
                .notEmpty()
                .withMessage("El estado es un dato obligatorio")
                .isBoolean()
                .withMessage("El dato ingresado debe ser un booleano"),
        ],
        editarPedido
    )
    .delete(borrarPedido);

export default router;
