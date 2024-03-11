
import Admin from "../model/admin.model.js";

export const signUp = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;

    let admin = new Admin(null, username, password);

    admin.signUp()
    .then((result) => {
        console.log(result);
        console.log(result.length);
        // console.log(result);
        if (result.length) {
            return response.status(200).json({ Message: "Sign Up Success"});
        }
        else{
            return response.status(501).json({ Error: "Sign Up fail"});
        }
    })
    .catch((err) => {
        console.log(err);
        return response.status(500).json({ Error: "Internal Server Error" });
    })
}

export const signIn = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;

    let admin = new Admin(null, username, password);

    admin.signIn()
    .then((result) => {
        return response.status(200).json({ Message: "Sign In Success", data: result });
    }).catch((err) => {
        return response.status(500).json({ Error: "Internal Server Error" });
    })
};


