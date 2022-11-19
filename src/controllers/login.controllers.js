import { validationResult } from "express-validator"
import Usuario from "../models/usuario";

export const login = async (req, res)=>{
    try {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const{ email, password } = req.body;
        const usuario = await Usuario.findOne({ email });
            if(!usuario){
        return res.status(400).json({
                mensaje : 'correo o password invalido - correo'
            })
        }
        if(password !== usuario.password){
            return res.status(400).json({
                mensaje : 'correo o password invalido - password'
            })
        }
        res.status(200).json({
            mensaje: 'El usuario existe'
        })

    } catch (error) {
        
        console.log(req.body)
        console.log(error)
        res.status(400).json({
            mensaje: 'usuario o contraseña invalido'
        })
    }
}