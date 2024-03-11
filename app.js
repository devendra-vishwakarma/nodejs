import bodyParser from "body-parser";
import express from "express";
import AdminRouter from "./routes/admin.route.js"
import UserRoter from './routes/user.route.js';
import CategoryRouter from "./routes/category.route.js";
import Cart from './routes/cart.route.js';
import cors from "cors";

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/admin", AdminRouter);

app.use('/user',UserRoter);

app.use("/category",CategoryRouter);

app.use('/cart',Cart)



app.listen(3001, () => {
    console.log("Server Started Successfully...");
})