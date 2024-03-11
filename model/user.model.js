import pool from '../db/dbUtil.js'
import Admin from './admin.model.js';

class User {
    constructor(userId, firstName,LastName,Email,Password,MobileNumber){
        this.userId = userId;
        this.firstName =firstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
        this.MobileNumber = MobileNumber;
    }
    signUp() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                } else {

                    let sql = "insert into user(first_name,last_name,email,password,mobile_number) values(?,?,?,?,?)";
                    connection.query(sql, [this.firstName,this.LastName,this.Email,this.Password,this.MobileNumber], (err, result) => {
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
                    let sql = "insert into user(first_name,last_name,email,password,mobile_number) value(?,?,?,?,?)";
                    connection.query(sql, [this.firstName,this.LastName,this.Email,this.Password,this.MobileNumber], (err, result) => {
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
export default User;