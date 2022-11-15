import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usuariosRouter from "./routes/usuarios.routes";
import productosRouter from "./routes/productos.routes";
import './database';

const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), ()=>{
    console.log("Estoy en el puerto " + app.get("port"));
});

//midelwares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(morgan('dev'));

app.use("/comitiando", usuariosRouter);
app.use("/comitiando", productosRouter);
