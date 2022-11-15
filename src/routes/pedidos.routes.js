const { Router } = require("express");
const { listarPedidos, guardarPedido, buscarPedido, editarPedido, borrarPedido } = require("../controllers/pedidos.controllers");

const router = Router();

router.route("/pedidos").get(listarPedidos).post(guardarPedido);
router.route("/pedidos/:id").get(buscarPedido).put(editarPedido).delete(borrarPedido);

export default router;
