import mongoose, { Schema, trusted } from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    estado:{
        type: Boolean,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    detalle:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    }
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;