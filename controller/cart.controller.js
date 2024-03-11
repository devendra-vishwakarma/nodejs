import { response } from 'express';
import Cart from '../model/cart.model.js';

export const createCart = (request, response, next) => {

    let userid = request.body.userid;

    let cart = new Cart(userid);

    cart.createCart()
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: "Sign Up Success" });
        }).catch(err => {
            console.log(err);
            return response.status(501).json({
                Error: "something wrong"
            })
        });
}

export const addProductToCart = (request, response, next) => {
    //  let user_id = request.body.user_id;
    let product_id = request.body.product_id;
    let cart_id = request.body.cart_id;

    console.log(request.body);
    let cart = new Cart(null, cart_id, product_id,);

    cart.addProductToCart()
        .then(result => {
            return response.status(200).json({ Message: 'product added cart suceesfully' });
        }).catch(err => {
            // console.log(err + "      yha pr error he");
            return response.status(500).json({ Error: 'internal server error' })
        });
}

export const deleteToProduct = (request, response, next) => {
    let cart_item_id = request.body.cart_item_id;
    // let cart_id = request.body.cart_id;
    // console.log(request.body)
    // let cart = new Cart(cart_item_id);
    // console.log();
    Cart.deleteToproduct(cart_item_id)
        .then(result => {
            return response.status(200).json({ Message: 'product delete successfully' });
        }).catch(
            err => {
                console.log(err+"   yhi pr he error");
                return response.status(500).json({ error: "this is an internal server error" });
            }
        );
}

