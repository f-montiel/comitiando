import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema({
    usuario: {
        type: String,
        required: true,
    },
    fecha: {
        type: String,
        required: true,
    },
    productos: {
        type: Array,
        required: true,
    },
    domicilio: {
        type: String,
        required: true,
    },
    indicaciones: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        require: true,
    },
});

const Pedido = mongoose.model("pedido", pedidoSchema);

export default Pedido;
