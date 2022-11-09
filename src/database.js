import mongoose from "mongoose";

const url = "mongodb+srv://f-montiel:om11062013@cluster0.csnnjye.mongodb.net/restorante";

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("db conectado");
});