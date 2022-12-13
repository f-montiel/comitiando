import { validationResult } from "express-validator"
import Usuario from "../models/usuario";
import bcrypt from 'bcryptjs';
import generarJWT from "../helpers/jwt";

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
        const passwordValido = bcrypt.compareSync(password, usuario.password);
        if(!passwordValido){
            return res.status(400).json({
                mensaje : 'correo o password invalido - password'
            })
        }
        const token = await generarJWT(usuario._id, usuario.email);
        return res.status(200).json({
            usuario,
            token: token,
            mensaje: 'El usuario existe'
        })

    } catch (error) {
        res.status(400).json({
            mensaje: 'usuario o contraseña invalido'
        })
    }
}