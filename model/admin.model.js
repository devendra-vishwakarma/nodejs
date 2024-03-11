import pool from "../db/dbUtil.js"

class Admin {

    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    signUp() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                } else {

                    let sql = "insert into admin(username,password) values(?,?)";
                    connection.query(sql, [this.username, this.password], (err, result) => {
                        err ? reject(err) : result.length != 0 ? resolve(result) : reject(err);
                        connection.release();
                    })
                }
            })
        })
    }
    signIn() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                } else {
                    let sql = "insert into admin(username,password) values(?,?)";
                    connection.query(sql, [this.username, this.password], (err, result) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        }
                        else if (result.length != 0) {
                            console.log(result);
                            resolve(result);
                        }
                        else {
                            reject(err);
                        }
                        connection.release();
                    })
                }
            })
        })
    }
    

}
export default Admin;