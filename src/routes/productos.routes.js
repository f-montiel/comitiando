import { Router } from "express";
import { borrarProducto, buscarProducto, editarProducto, guardarProducto, listarProductos } from "../controllers/productos.controller";

const router = Router();

router.route("/productos")
.get(listarProductos)
.post(guardarProducto)

router.route("/productos/:id")
.get(buscarProducto)
.put(editarProducto)
.delete(borrarProducto)

export default router;