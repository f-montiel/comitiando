import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    perfil: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;