import express from "express";
import cors from "cors";
import morgan from "morgan";
import usuariosRouter from "./routes/usuarios.routes";
import productosRouter from "./routes/productos.routes";
import pedidosRouter from "./routes/pedidos.routes";
import loginRouter from "./routes/login.routes";
import "./database";
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto " + app.get("port"));
});

//midelwares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(morgan("dev"));

app.use("/comitiando", usuariosRouter);
app.use("/comitiando", productosRouter);
app.use("/comitiando", pedidosRouter);
app.use("/comitiando", loginRouter);