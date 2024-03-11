import { error } from 'console';
import pool from '../db/dbUtil.js';

class Category {
    constructor(category_id, category_name) {
        this.category_id = category_id;
        this.category_name = category_name;
    }
    save() {
        return new Promise(
            (resolve, reject) => {
                pool.getConnection((error, connection) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        let sql = "insert into category(category_name) values(?)";
                        connection.query(sql, [this.category_name], (err, result) => {
                            err ? reject(err) : result.length != 0 ? resolve(result) : reject(err);
                            connection.release();
                        })
                    }
                })
            }
        )
    }
    updatecategory() {
        return new Promise((resolve, reject) => {
            pool.getConnection(
                (error, connection) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        let sql = "UPDATE category SET category_name = ? WHERE category_id = ?";
                        connection.query(sql, [this.category_name, this.category_id], (err, result) => {
                            err ? reject(err) : result.length != 0 ? resolve(result) : reject(err);
                            connection.release();
                        })
                    }
                }
            )
        })
    }
    DeleteCategory() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                else {
                    let sql = "delete from category where category_id=?";
                    connection.query(sql, [this.category_id], (err, result) => {
                        err ? reject(err) : result.length != 0 ? resolve(result) : reject(err);
                        console.log(err);
                        connection.release();
                    });

                }
            })
        })
    }
    CategoryInsertData() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err)
                }
                else {
                     let sql = "insert into category(category_id,category_name) values(?,?)";
                     connection.query(sql,[this.category_id,this.category_name],(err,result)=>{
                        err?reject(err):resolve(result);
                        connection.release();
                     });
                }
            })
        })
    }
}
export default Category;



