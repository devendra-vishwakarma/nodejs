import pool from '../db/dbUtil.js';

class Cart {
    constructor(user_id, cart_id, product_id, cart_item_id) {
        this.cart_id = cart_id;
        this.user_id = user_id;
        this.product_id = product_id;
    }
    createCart() {
        return new Promise(
            (resolve, reject) => {
                pool.getConnection((err, Connection) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        let sql = "insert into cart(user_id) values(?)";
                        Connection.query(sql, [this.user_id], (err, result) => {
                            err ? reject(err) : resolve(result);
                            Connection.release();
                        })
                    }
                })
            }
        )
    }
    addProductToCart() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                }
                else {
                    let sql = "insert into cart_item(product_id,cart_id) values(?,?)";
                    connection.query(sql, [this.product_id, this.cart_id], (err, result) => {
                        err ? reject(err) : resolve(result);
                        connection.release();
                    });
                }
            });
        });
    }
    static deleteToproduct(cart_item_id) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    // console.log(err);
                    reject(err);
                }
                else {
                    let sql = "delete from cart_item where cart_item_id=?";
                    connection.query(sql, [cart_item_id], (err, result) => {
                        err ? reject(err) : resolve(result);
                        // console.log(err);
                        connection.release();
                    });
                }
            });
        });
    }
}
export default Cart;