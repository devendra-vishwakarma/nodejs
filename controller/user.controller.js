import { request } from 'https';
import User from '../model/user.model.js';
import { response } from 'express';


export const signUp = (request, response, next) => {
    let firstname = request.body.username;
    let LastName = request.body.LastName;
    let password = request.body.password;
    let email = request.body.email;
    let mobile_number = request.body.mobile_number;
     

    let user = new User(null,firstname,LastName,email,password,mobile_number);

    user.signUp()
    .then((result) => {
        console.log(result);
        return response.status(200).json({ Message: "Sign Up Success"});
    })
    .catch((err) => {
        console.log(err);
        return response.status(500).json({ Error: "Internal Server Error" });
    })
}
export const signIn = (request,response) => {

}