import express from 'express';
import {addProductToCart, createCart, deleteToProduct} from '../controller/cart.controller.js';

const router = express.Router();

router.post('/createCart',createCart);

router.post('/add',addProductToCart)

router.delete('/delete',deleteToProduct)

export default router;