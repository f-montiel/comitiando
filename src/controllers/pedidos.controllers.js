import Pedido from "../models/pedido";

export const listarPedidos = async (req, res)=>{
    try {
        const pedidos = await Pedido.find();
        res.status(200).json(pedidos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "pedidos no encontrados"
        });
    }
}

export const buscarPedido = async (req, res)=>{
    try {
        const id = req.params.id;
        const pedidoBuscado = await Pedido.findById(id);
        res.status(200).json(pedidoBuscado);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Pedido no encontrado"
        })
    }
}

export const guardarPedido = async(req, res)=>{
    try {
        const pedidoGuardado = new Pedido(req.body);
        await pedidoGuardado.save();
        res.status(201).json({
            mensaje: "El pedido fue guardado con exito"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "El pedido no se pudo guardar"
        })
    }
}

export const editarPedido = async(req, res)=>{
    try {
        const id = req.params.id;
        await Pedido.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "El pedido se edito con exito"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error al editar el pedido"
        })
    }
}

export const borrarPedido = async(req, res)=>{
    try {
        const id = req.params.id;
        await Pedido.findByIdAndDelete(id);
        res.status(200).json({
            mensaje: "El pedido fue borrado"
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "El pedido no fue borrado"
        });
    }
}