import mongoose, {Schema} from "mongoose";

const pedidoSchema = new Schema({
    usuario:{
        type: Object,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    },
    productos: {
        type: Object,
        required: true
    },
    estado: {
        type: Boolean,
        require: true
    }
});

const Pedido = mongoose.model('pedido', pedidoSchema);

export default Pedido;