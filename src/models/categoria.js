import mongoose, {Schema} from "mongoose";

const categoriaschema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    }
})

const Categoria = mongoose.model('categoria', categoriaschema);

export default Categoria;