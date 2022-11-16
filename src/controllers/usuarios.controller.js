import { validationResult } from "express-validator";
import Usuario from "../models/usuario";

export const listarUsuarios = async (req, res)=>{
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Usuarios no encontrados"
        });
    }
}

export const buscarUsuario = async (req, res)=>{
    try {
        const id = req.params.id;
        const usuarioBuscado = await Usuario.findById(id);
        res.status(200).json(usuarioBuscado);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Usuario no encontrado"
        })
    }
}

export const guardarUsuario = async(req, res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errores: errors.array()
            })
        }
        const usuarioGuardado = new Usuario(req.body);
        await usuarioGuardado.save();
        res.status(201).json({
            mensaje: "El usuario fue guardado con exito"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "El usuario no se pudo guardar"
        })
    }
}

export const editarUsuario = async(req, res)=>{
    try {
        const id = req.params.id;
        console.log(req.body);
        await Usuario.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "El usuario se edito con exito"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error al editar el usuario"
        })
    }
}

export const borrarUsuario = async(req, res)=>{
    try {
        const id = req.params.id;
        await Usuario.findByIdAndDelete(id);
        res.status(200).json({
            mensaje: "El usuario fue borrado"
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "El usuario no fue borrado"
        });
    }
}