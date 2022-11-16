import Producto from "../models/producto";
import { validationResult } from "express-validator";

export const listarProductos = async (req, res)=>{
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "productos no encontrados"
        });
    }
}

export const buscarProducto = async (req, res)=>{
    try {
        const id = req.params.id;
        const productoBuscado = await Producto.findById(id);
        res.status(200).json(productoBuscado);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Producto no encontrado"
        })
    }
}

export const guardarProducto = async(req, res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errores: errors.array()
            })
        }
        const productoGuardado = new Producto(req.body);
        await productoGuardado.save();
        res.status(201).json({
            mensaje: "El producto fue guardado con exito"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "El producto no se pudo guardar"
        })
    }
}

export const editarProducto = async(req, res)=>{
    try {
        const id = req.params.id;
        await Producto.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "El producto se edito con exito"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error al editar el producto"
        })
    }
}

export const borrarProducto = async(req, res)=>{
    try {
        const id = req.params.id;
        await Producto.findByIdAndDelete(id);
        res.status(200).json({
            mensaje: "El producto fue borrado"
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "El producto no fue borrado"
        });
    }
}